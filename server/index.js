const express = require('express');
const server = express();
const api = require('./api')
server.use('/api',api);

server.get('/', (req,res) => {
    res.send('Hello there')
})


server.listen(8082, () => {
    console.log('Listening on port 8082')
})