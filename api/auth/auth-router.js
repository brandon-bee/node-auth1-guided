const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require('../users/users-model');
const { validateUser, usernameIsUnique } = require('./auth-middleware');

router.post('/register', validateUser, usernameIsUnique, async (req, res, next) => {
    try {
        const user = req.body;
        const hash = bcrypt.hashSync(user.password, 12);
        user.password = hash;
        let result = await Users.add(user);
        res.status(201).json(result);
    } catch(err) {
        next(err);
    }
});

router.post('/login', (req, res, next) => {
    res.json('login')
});

router.get('/logout', (req, res, next) => {
    res.json('logout')
});

module.exports = router;