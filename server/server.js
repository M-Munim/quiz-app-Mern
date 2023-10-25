// Common js format to import files inside node js app
// const express = require('express')

// to change this in pkg json add type: "module"
import express from 'express';
import morgan from 'morgan' // when ever i make req on server i want that req msg in my console
import cors from 'cors' // for cross domain data sharing 
import { config } from "dotenv"; // during deployment we can easily specify port using  envoirment variable

const app = express()

// app middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json) // imforming express we are using json format
config(); // will initialize this app with .env

// application port 
const port = process.env.PORT || 8000;

// routes
app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})

app.listen(port, () => {
    console.log(`Server Connected to http://localhost:${port}`);
})








// to start development server
// in pkg json change script > "start": "nodemon server.js"