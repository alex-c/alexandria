var ObjectId = require('mongodb').ObjectID;

function deleteRecord(req, res, next) {

    const collection = req.app.db.collection("collection_" + req.params.collection);
    const recordId = new ObjectId(req.params.recordId);

    collection.findOneAndDelete({_id: recordId}, function (error, response) {
        if (error) {
            next(error);
        }
        if (response.value != null) {
            res.end();
        } else {
            res.status(404).end();
        }
    });

}

module.exports = deleteRecord;
