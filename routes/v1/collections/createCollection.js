const util = require('./util.js');

function createCollection(req, res, next) {

    const collection = req.app.db.collection("collection_" + req.body.name);

    let record = util.createRecordFromDocument(req.body, "admin");

    collection.createIndex({
        created: -1
    }, function(error, result) {
        if (error) {
            next(error);
        } else {
            res.json({_id: response.insertedId});
        }
    });

    collection.insertOne(record, function (error, response) {
        if (error) {
            next(error);
        } else {
            res.json({_id: response.insertedId});
        }
    });

}

module.exports = createRecord;
