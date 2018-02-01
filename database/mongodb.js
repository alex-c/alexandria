const MongoClient = require('mongodb').MongoClient;
const config = require('config');

//Get connection info from config
const host = config.get('mongo.host');
const port =  config.get('mongo.port');
const database =  config.get('mongo.database');
const user =  config.get('mongo.user');
const password =  config.get('mongo.password');
const mongoUrl = 'mongodb://' + user + ':' + password + '@' + host +  ':' + port + '/' + database;

module.exports = function(app) {

    //Connect to MongoDB
    MongoClient.connect(mongoUrl, {

        //Connection configuration
        poolSize: config.get('mongo.poolSize')

    }).then(function(client) {

        //Expose database to routes through req.app.db
        app.db = client.db(config.get('mongo.database'));

    }).catch(function(error) {
        console.log(error);
    });

}
