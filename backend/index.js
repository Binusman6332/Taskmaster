//set up the dotenv
const dotenv = require('dotenv');
dotenv.config();

//set up the express
const express = require('express');

const app = require('express');

//set up PORT
const PORT = process.env.PORT || 3000;

const DB = require('./config/db');
const {mongo, default: mongoose } = require('mongoose');

DB();

mongoose.connection.once('open', () => {
    console.log('connect to MongoDB');
    application.listen(PORT, () => console.log('server running on port ${PORT}'));
});

module.exports = app;