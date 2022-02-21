const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");

router.post('/register', (req, res, next) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, 12);
    console.log(hash);
    res.end();
});

router.post('/login', (req, res, next) => {
    res.json('login')
});

router.get('/logout', (req, res, next) => {
    res.json('logout')
});

module.exports = router;