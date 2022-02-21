const express = require('express');
const router = express.Router();

router.post('register', (req, res, next) => {
    res.json('register')
});

router.post('login', (req, res, next) => {
    res.json('login')
});

router.get('logout', (req, res, next) => {
    res.json('logout')
});

module.exports = router;