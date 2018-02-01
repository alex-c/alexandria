const express = require('express');
const router = express.Router();

//router.get('/auth', require('./auth'));
//router.get('/users', require('./users'));
router.use('/collections', require('./collections/index.js'));

module.exports = router;
