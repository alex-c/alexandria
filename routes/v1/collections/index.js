const express = require('express');
const router = express.Router();

router.post('/:collection', require('./create.js'));
router.get('/:collection', require('./getAll.js'));
router.put('/:collection', require('./update.js'));
router.delete('/:collection', require('./delete.js'));

module.exports = router;
