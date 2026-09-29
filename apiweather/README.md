# Weather App
A simple web application built with Node.js and Express that lets users search for a city and see current weather conditions using the OpenWeatherMap API.
**Live Demo:** [https://my-weather-app-gamma-eight.vercel.app](https://my-weather-app-gamma-eight.vercel.app)
## Features
- Connects to the OpenWeatherMap REST API to fetch data.
- Renders the user interface server-side using EJS.
- Secures the API key locally using a `.env` file.

## Tech Stack
- Backend: Node.js, Express
- Frontend: HTML, CSS, EJS
- HTTP Client: Axios

## How to run it
1. Clone the repository.
2. Run `npm install` to install the required dependencies.
3. Create a `.env` file in the root folder and add your API key:
   
API_KEY=your_openweathermap_api_key_here