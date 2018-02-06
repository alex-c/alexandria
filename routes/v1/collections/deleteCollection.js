function deleteCollection(req, res, next) {

    const collection = req.app.db.collection("collection_" + req.params.collection);

    collection.drop(function (error, success) {
        if (error) {
            next(error);
        }
        res.end();
    });

}

module.exports = deleteCollection;
