CRUD Example 

Pre requisites
Node.js and npm installed
PostgreSQL installed and running

Setup

1. Clone the repository
2. Install dependencies
    npm install
3. Create a PostgreSQL database called mydb
  sql- CREATE DATABASE mydb;
4. Update the db.js file with your PostgreSQL username, password, and port
5. Run the app
   npm start

   
The app will be running on http://localhost:3000

Usage
The app has the following routes:

POST /users - Create a new user

GET /users - Get all users

PUT /users/:id - Update a user

DELETE /users/:id - Delete a user

To test the routes you can use a tool like Postman or curl.

For example to create a user:


curl -X POST \
  http://localhost:3000/users \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "John Doe",
    "email": "john@example.com"
}'
