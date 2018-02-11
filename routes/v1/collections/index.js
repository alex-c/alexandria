const express = require('express');
const router = express.Router();

//Create a record
router.post('/:collection', require('./createRecord.js'));

//Get all or a specific record
router.get('/:collection', require('./getAllRecords.js'));
router.get('/:collection/:recordId', require('./getRecord.js'));

//Update an existing record
router.put('/:collection/:recordId', require('./updateRecord.js'));

//Delete all or a specific record
router.delete('/:collection', require('./deleteCollection.js'));
router.delete('/:collection/:recordId', require('./deleteRecord.js'));

module.exports = router;
