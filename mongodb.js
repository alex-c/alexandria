const config = require('config');
const expressMongoDb = require('express-mongo-db');

//Get connection info from config
const host = config.get('mongo.host');
const port =  config.get('mongo.port');
const database =  config.get('mongo.database');
const user =  config.get('mongo.user');
const password =  config.get('mongo.password');
const mongoUrl = 'mongodb://' + user + ':' + password + '@' + host +  ':' + port + '/' + database;

//Connect
const ConnectionPool = expressMongoDb(mongoUrl, {
    poolSize: config.get('mongo.poolSize')
});

module.exports = ConnectionPool;
