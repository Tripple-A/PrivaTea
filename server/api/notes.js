const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.send('all notes')
})

module.exports = router;