const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require('../users/users-model');

router.post('/register', (req, res, next) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

});

router.post('/login', (req, res, next) => {
    res.json('login')
});

router.get('/logout', (req, res, next) => {
    res.json('logout')
});

module.exports = router;