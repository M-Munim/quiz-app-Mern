// Common js format to import files inside node js app
// const express = require('express')

// to change this in pkg json add type: "module"
import express from 'express';
import morgan from 'morgan' // when ever i make req on server i want that req msg in my console
import cors from 'cors' // for cross domain data sharing 
import { config } from "dotenv"; // during deployment we can easily specify port using  envoirment variable
import router from './router/route.js';

// importing connection file
import connect from './database/connection.js';

const app = express()

// app middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json()) // imforming express we are using json format
config(); // will initialize this app with .env

// application port 
const port = process.env.PORT || 8000;

//db connection 
// connect(); >db only connect if we have valid connection then (line 45)

// routes
app.use('/api', router) //Apis

app.get('/', (req, res) => {
    try {
        res.json("Get Request")
    } catch (error) {
        res.json(error)
    }
})





// start server only when we have valid connection then access backend

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server Connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log(`Cannot connect to server due to ${error} `);
    }
}).catch(error => {
    console.log("Invalid Database Connection");
})



// to start development server
// in pkg json change script > "start": "nodemon server.js"