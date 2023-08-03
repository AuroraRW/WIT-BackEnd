const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/create', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'create.html'))
});

router.post('/cards', (req, res, next) => {
    console.log(req.body);
    res.redirect('/cards');
});

router.get('/cards', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'cards.html'));
});

module.exports = router