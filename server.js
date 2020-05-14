const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.json('hello from the server!')
})

module.exports = server;