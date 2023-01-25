const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

connectDB(); // it is important to connect to database BEFORE initializing Express
const app = express(); // initalizing Express

const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () => { console.log(`Server is listening on PORT ${PORT}`); });

process.on('unhandledRejection', (error) => {
    console.log(`Error: ${error.message}`);
    server.close(() => {process.exit(1)}); // gracefully terminates the server on failure synchronously - 1 indicates server failure
});