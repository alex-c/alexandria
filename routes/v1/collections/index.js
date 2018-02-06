const express = require('express');
const router = express.Router();

//Administration of collections
router.delete('/:collection', require('./deleteCollection.js'));

//CRUD on records
router.post('/:collection/records', require('./records/createRecord.js'));
router.get('/:collection/records', require('./records/getAllRecords.js'));
router.get('/:collection/records/:recordId', require('./records/getRecord.js'));
router.put('/:collection/records/:recordId', require('./records/updateRecord.js'));
router.delete('/:collection/records/:recordId', require('./records/deleteRecord.js'));

module.exports = router;
