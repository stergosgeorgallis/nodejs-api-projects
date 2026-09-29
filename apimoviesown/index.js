import express from "express";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

// Allow to express to read JSON data
app.use(express.json());

let movies = [
    { id: 1, title: "The Matrix", year: 1999, genre: "Sci-Fi" },
    { id: 2, title: "Inception", year: 2010, genre: "Sci-Fi" },
    { id: 3, title: "The Hangover", year: 2009, genre: "Comedy" }
];

  
// Όταν κάποιος μπει στο link, ξεκινάει μια συνάρτηση που δέχεται το αίτημα του χρήστη (req - request) και ετοιμάζει την απάντηση του server (res - response)
app.get("/api/movies/filter", (req, res) => {
    const genre = req.query.genre;
    const filteredMovies = movies.filter((movie) => 
        movie.genre === genre);
    res.json(filteredMovies);
});
// our whole database
app.get("/api/movies", (req, res) => {
    res.json(movies);
});

app.get("/api/movies/:id", (req, res) => {
    // :id here user posts any integer as an id for input 
    // parameter link (.params.id) text form -> parseInt to take integer
    const id = parseInt(req.params.id);
    const foundMovie = movies.find((movie) => 
        movie.id === id);

    if (!foundMovie) return res.status(404).json({ error: "Movie not found" });
    res.json(foundMovie);
});



app.post("/api/movies", (req, res) => {
    let newId;
    if (movies.length === 0) {
        newId = 1; 
    } else {
        const lastMovie = movies[movies.length - 1];
        newId = lastMovie.id + 1; 
    }
    const newMovie = {
        id: newId, 
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
});



app.put("/api/movies/:id", (req, res) => {
    const id = parseInt(req.params.id); 
    const replacementMovie = {
        id: id, 
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre
    };
    const searchIndex = movies.findIndex((movie) => movie.id === id);
    
    if (searchIndex === -1) return res.status(404).json({ error: "Movie not found" });
    movies[searchIndex] = replacementMovie;
    res.json(replacementMovie);
});


app.patch("/api/movies/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const existingMovie = movies.find((movie) => movie.id === id);
    if (!existingMovie) 
        return res.status(404).json({ error: "Movie not found" });
    const replacementMovie = {
        id: id,
        title: req.body.title || existingMovie.title, 
        year: req.body.year || existingMovie.year,
        genre: req.body.genre || existingMovie.genre
    };
    const searchIndex = movies.findIndex((movie) => movie.id === id);
    movies[searchIndex] = replacementMovie;  
    res.json(replacementMovie);
});


app.delete("/api/movies/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const searchIndex = movies.findIndex((movie) => movie.id === id);
    if (searchIndex === -1) 
        return res.status(404).json({ error: "Movie not found" });

    movies.splice(searchIndex, 1);
    res.json({ message: "Movie deleted successfully!!!!!!" });
});


app.listen(port, () => {
    console.log(`The Movies API is running port :${port}!`);
});