const express = require('express');
const app = express();
const contacts = require('./contacts');
const notes = require('./notes');
app.use('/contacts',contacts)
app.use('/notes',notes)
module.exports = app