require('dotenv').config();

//First we connect to Mongo Database using mongoose
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

//We start server at port 3001
const app = express();

app.use(express.json());

app.listen(3002, () => {
    console.log(`Server Started at ${3002}`)
})

//We add the api route for tasks
const taskRoutes = require('./routes/tasks');

const cors = require("cors")
app.use(cors())

app.use("/tasks", taskRoutes)
