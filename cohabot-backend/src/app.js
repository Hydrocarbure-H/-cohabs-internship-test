const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Configure CORS to allow connections from localhost:3000
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

// Routes
app.use('/api/chat', routes);

module.exports = app;
