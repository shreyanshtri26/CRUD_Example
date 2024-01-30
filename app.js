const express = require('express');
const pool = require('./db'); 

const app = express();

app.use(express.json());

// Create 
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
  
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Read
app.get('/users', async (req, res) => {
  try {
    const allUsers = await pool.query('SELECT * FROM users');
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Update
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params; 
    const { name, email } = req.body;
    const updateUser = await pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id]
    );
  
    res.json('User updated!');
  } catch (err) {
    console.error(err.message);
  }
});

// Delete 
app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json('User deleted!');
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});