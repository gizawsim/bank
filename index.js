//http
const http = require("http");

//Express
const express = require("express");

//Global Application
const app = express();

//Dotenv
const dotenv = require("dotenv");
dotenv.config({path: "./config.env" });

//Mongoose
const Mongoose = require("mongoose");
const { default: mongoose } = require("mongoose");

//Create Server
const server = http.createServer(app);


//port
const port =process.env.PORT || 3000;

//Listen on the server
server.listen(port, ( => {
    console.log('Listening on ${port}...');
}));

//Connect to DB
mongoose.connect(process.env.DATABASE_REMOTE).then(() -> {
    console.log('Connected Successfully');
});

//db connection
