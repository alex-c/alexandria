var ObjectId = require('mongodb').ObjectID;

function getRecord(req, res, next) {

    const collection = req.app.db.collection("collection_" + req.params.collection);
    const recordId = new ObjectId(req.params.recordId);

    collection.findOne({_id: recordId}, function(error, record) {
        if (error) {
            next(error);
        } else {
            if (record != null) {
                res.json(record);
            } else {
                res.status(404).end();
            }
        }
    });

}

module.exports = getRecord;
