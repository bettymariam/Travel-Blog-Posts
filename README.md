# Travel Blog

An Angular application built in the style of reddit that allows users to CRUD data from a server.

## Installation Instructions:
Fork and clone  
Run NPM Install  
Create a postgresql database called travel-blog-db
  ```
  createdb travel-blog-db
  ```
Run migration files:
  ```
  npm run knex migrate:latest
  ```
Run seed files:
  ```
  npm run knex seed:run
  ```
Start server
  ```
  npm start
  ```
In a browser navigate to:
  ```
  localhost:5000
  ```
