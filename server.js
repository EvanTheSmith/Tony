const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
const connectDB = require('./config/db');
const logger = require('./utils/logger');

connectDB(); // it is important to connect to database BEFORE initializing Express
const app = express(); // initalizing Express

const PORT = process.env.PORT || 5006;
app.use(logger);
const server = app.listen(PORT, () => { console.log(`Server is listening on PORT ${PORT}`); });

process.on('unhandledRejection', (error) => {
    console.log(`Error: ${error.message}`);
    server.close(() => {process.exit(1)}); // gracefully terminates the server on failure synchronously - 1 indicates server failure
});