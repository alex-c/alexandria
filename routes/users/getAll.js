function getAllUsers(req, res, next) {

    const users = req.db.collection('users');

    users.find({}).toArray(function(error, documents) {
        if (error) {
            next(error);
        }
        res.json({
            success: true,
            documents: documents
        });
    });

}

module.exports = getAllUsers;
