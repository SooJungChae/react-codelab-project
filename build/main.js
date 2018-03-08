'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

<<<<<<< HEAD
var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

=======
>>>>>>> master
var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

<<<<<<< HEAD
=======
var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

>>>>>>> master
var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

<<<<<<< HEAD
// http request logger
var app = (0, _express2.default)(); //parse html body
=======
// HTTP REQUEST LOGGER


var app = (0, _express2.default)(); // PARSE HTML BODY
>>>>>>> master

var port = 3000;
var devPort = 4000;

<<<<<<< HEAD
app.use((0, _morgan2.default)('dev')); // html 요청을 log 한다.
app.use(_bodyParser2.default.json()); // for parsing application/json
app.use(_bodyParser2.default.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
=======
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
>>>>>>> master

/* mongodb connection */
var db = _mongoose2.default.connection;
db.on('error', console.error);
db.once('open', function () {
    console.log('Connected to mongodb server');
});
// mongoose.connect('mongodb://username:password@host:port/database=');
_mongoose2.default.connect('mongodb://localhost/codelab');

/* use session */
app.use((0, _expressSession2.default)({
    secret: 'CodeLab1$1$234',
    resave: false,
    saveUninitialized: true
}));

app.use('/', _express2.default.static(_path2.default.join(__dirname, './../public')));

/* setup routers & static directory */
app.use('/api', _routes2.default);

<<<<<<< HEAD
// support client-side routing
=======
>>>>>>> master
app.get('*', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, './../public/index.html'));
});

<<<<<<< HEAD
app.get('/hello', function (req, res) {
    return res.send('Hello CodeLab');
});

// handle error
// router 에서 throw err 가 실행되면 이 코드가 실행된다.
=======
/* handle error */
>>>>>>> master
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, function () {
    console.log('Express is listening on port', port);
});

if (process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
<<<<<<< HEAD
    var _config = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(_config);
    var devServer = new _webpackDevServer2.default(compiler, _config.devServer);
    devServer.listen(devPort, function () {
        console.log('webpack-dev-server is listening on port', devPort);
    });

    var sql = require('mssql');

    // config for your database
    var _config = {
        server: 'SOODIAMOND',
        user: 'sa',
        password: 'dpf5236',
        database: 'S2Std',
        options: {
            // encrypt: true // Use this if you're on Windows Azure
            instanceName: 'SQLEXPRESS'
        }
    };

    // connect to your database
    sql.connect(_config, function (err) {
        if (err) console.log(err);else console.log('mssql connect!');
    });
=======
    var config = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(devPort, function () {
        console.log('webpack-dev-server is listening on port', devPort);
    });
>>>>>>> master
}