const util = require('./util.js');
var ObjectId = require('mongodb').ObjectID;

function updateRecord(req, res, next) {

    const collection = req.app.db.collection("collection_" + req.params.collection);
    const recordId = new ObjectId(req.params.recordId);

    collection.findOne({_id: recordId}, function (error, record) {
        if (error) {
            next(error);
        }
        if (record == null) {
            res.status(404).end();
        } else {
            record = util.updateRecordFromDocument(record, req.body);
            collection.updateOne({_id: recordId}, {$set: record}, function (error, response) {
                if (error) {
                    next(error);
                }
                res.end();
            });
        }
    });

}

module.exports = updateRecord;
