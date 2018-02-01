function create(req, res, next) {

    const collection = req.app.db.collection("alexandria_" + req.params.collection);

    console.log(req.body);

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
