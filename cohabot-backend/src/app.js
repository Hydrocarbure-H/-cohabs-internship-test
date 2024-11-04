const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

// Routes
app.use('/api/chat', routes);

module.exports = app;
