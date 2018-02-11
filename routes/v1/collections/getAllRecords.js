function getAllRecords(req, res, next) {

    const collection = req.app.db.collection("collection_" + req.params.collection);

    collection.find({}).toArray(function(error, documents) {
        if (error) {
            next(error);
        }
        res.json(documents);
    });

}

module.exports = getAllRecords;
