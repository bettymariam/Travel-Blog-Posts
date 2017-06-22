dropdb travel-blog-db --if-exists
dropdb travel-blog-db-test --if-exists

createdb travel-blog-db
createdb travel-blog-db-test

knex migrate:latest --knexfile app/knexfile.js
knex migrate:latest --env test --knexfile app/knexfile.js

knex seed:run --knexfile app/knexfile.js
