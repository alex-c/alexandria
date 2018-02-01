const path = require('path');
const cors = require('cors');
const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');

//Initialize Express app
const app = express();

//Configure Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var corsOrigin = config.get('corsOrigin');
if (corsOrigin == "*") {
    app.use(cors());
} else if (corsOrigin != "") {
    app.use(cors({origin: corsOrigin}));
}

//Initialize database connection
require('./database/mongodb.js')(app);

//API
app.get('/users', require('./routes/users/getAll.js'));
app.post('/collections/:collection', require('./routes/collections/create.js'));
app.get('/collections/:collection', require('./routes/collections/getAll.js'));

//Serve administration UI
if (config.get('serveAdmin')) {
    app.use('/admin', express.static(path.join(__dirname, 'admin')))
}

//Serve public page
if (config.get('servePublic')) {
    app.use('/', express.static(path.join(__dirname, 'public')))
}

//Error handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({success: false, message: err.message});
});

app.listen(config.get('port'), () => console.log('Alexandria successfully started and is listening on port ' + config.get('port') + '!'));
