# MyMovies RESTful API
A backend REST API built with Node.js and Express for managing a movie database.

## Features
- Fully CRUD operations (Create, Read, Update, Delete).
- In memory data storage -> using JavaScript arrays.
- Supports both `PUT` (full replacement) and `PATCH` (partial updates).
- URL query filtering for specific data subsets.
- Standard HTTP status codes for error handling.

## Tech Stack
- Node.js
- Express
- dotenv

## API Endpoints

## API Endpoints

* **GET** `/api/movies` - Get all movies
* **GET** `/api/movies/filter?genre=...` - Filter movies by genre
* **GET** `/api/movies/:id` - Get a specific movie by the id
* **POST** `/api/movies` - Add a new movie to the array storage
* **PUT** `/api/movies/:id` - Update whole movie
* **PATCH** `/api/movies/:id` - Update just a part of a movie
* **DELETE** `/api/movies/:id` - Delete a movie!

## How to run it
1. Clone the repository.
2. Run `npm install`.
3. Create an empty `.env` file in the root folder.
4. Run `node index.js` (or `nodemon index.js`) to start the server.
5. Test the endpoints at `http://localhost:3000` using Postman or Thunder Client.