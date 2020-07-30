const express = require('express');
const server = express();
const api = require('./api/contacts')
server.use('/contacts',api);

server.get('/', (req,res) => {
    res.send('Hello there')
})


server.listen(3000, (err,res) => {
    console.log('Listening on port 3000')
})