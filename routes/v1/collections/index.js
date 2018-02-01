const express = require('express');
const router = express.Router();

router.get('/:collection', require('./getAll.js'));
router.post('/:collection', require('./create.js'));

module.exports = router;
