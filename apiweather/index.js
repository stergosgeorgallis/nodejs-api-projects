import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import 'ejs';

import dotenv from "dotenv";
dotenv.config();


// create server and telling him which port we use
const app = express();
const port = 3000;
// my api key from https://home.openweathermap.org/users/sign_in 
const apiKey = process.env.API_KEY;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


// Middleware tell us when user Post or Get the time user do it 
app.use((req, res, next) => {
    const now = new Date().toLocaleTimeString();
    console.log(`[${now}] New Request: ${req.method} request to ${req.url}`);
    next(); 
});

// Starting page "/" 
// GET -> send it to user 
app.get("/", (req, res) => {
    res.render("index.ejs", { weatherData: null, error: null });
});
//  Post to server API deliver to us the data 
app.post("/", async (req, res) => {
    const city = req.body.cityName;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await axios.get(apiUrl);
        res.render("index.ejs", { weatherData: response.data,  error: null });    
    } catch (error) {
        res.render("index.ejs", { weatherData: null, error: "City not found. Please try again now or later ..." });
    }
});




app.listen(port, () => {
    console.log(`Server is running at port:${port}`);
});