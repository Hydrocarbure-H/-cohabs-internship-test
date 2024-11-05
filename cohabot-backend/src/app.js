const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const {front_url} = require("./config/dotenv");


const app = express();

// Configure CORS to allow connections from localhost:3000
app.use(cors({
    origin: front_url
}));

app.use(express.json());

// Routes
app.use('/api/chat', routes);

module.exports = app;
