function create(req, res, next) {

    const collection = req.app.db.collection("collection_" + req.params.collection);

    collection.insertOne(req.body, function (error, response) {
        if (error) {
            next(error);
        }
        res.json({
            success: true
        });
    });

}

module.exports = create;
