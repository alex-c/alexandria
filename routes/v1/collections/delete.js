var ObjectId = require('mongodb').ObjectID;

function create(req, res, next) {

    const collection = req.app.db.collection("collection_" + req.params.collection);

    let id = new ObjectId(req.body._id);

    collection.findOneAndDelete({_id: id}, function (error, response) {
        if (error) {
            next(error);
        }
        res.json({
            success: true
        });
    });

}

module.exports = create;
