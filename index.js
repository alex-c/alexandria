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

//Serve administration UI
if (config.get('serveAdmin')) {
    app.use('/admin', express.static(path.join(__dirname, 'admin')))
}

//Serve public page
if (config.get('servePublic')) {
    app.use('/', express.static(path.join(__dirname, 'public')))
}

//API
app.get('/', (req, res) => res.send('Hello World!'));

//Error handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send({success: false, message: err.message});
});

app.listen(config.get('port'), () => console.log('Alexandria successfully started and is listening on port ' + config.get('port') + '!'));
