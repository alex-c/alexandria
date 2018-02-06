const createRecordFromDocument = require('../../../../records/create.js');

function createRecord(req, res, next) {

    const collection = req.app.db.collection("collection_" + req.params.collection);

    let record = createRecordFromDocument(req.body, "admin");

    collection.insertOne(record, function (error, response) {
        if (error) {
            next(error);
        } else {
            res.json({_id: response.insertedId});
        }
    });

}

module.exports = createRecord;
