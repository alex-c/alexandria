var ObjectId = require('mongodb').ObjectID;

function create(req, res, next) {

    const collection = req.app.db.collection("collection_" + req.params.collection);

    let id = new ObjectId(req.body._id);
    let document = req.body;
    delete document._id;

    collection.findOneAndUpdate({_id: id}, {$set: document}, function (error, response) {
        if (error) {
            next(error);
        }
        res.json({
            success: true
        });
    });

}

module.exports = create;
