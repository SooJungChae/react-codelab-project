import express from 'express';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import morgan from 'morgan';  // http request logger
import bodyParser from 'body-parser'; //parse html body
import mongoose from 'mongoose';
import session from 'express-session';
import api from './routes';

import morgan from 'morgan'; // HTTP REQUEST LOGGER
import bodyParser from 'body-parser'; // PARSE HTML BODY

import mongoose from 'mongoose';
import session from 'express-session';

import api from './routes';


const app = express();
const port = 3000;
const devPort = 4000;

<<<<<<< HEAD
app.use(morgan('dev')); // html 요청을 log 한다.
app.use(bodyParser.json());  // for parsing application/json
app.use(bodyParser.urlencoded({extended: false})); // for parsing application/x-www-form-urlencoded
=======
app.use(morgan('dev'));
app.use(bodyParser.json());
>>>>>>> master

/* mongodb connection */
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongodb server'); });
// mongoose.connect('mongodb://username:password@host:port/database=');
mongoose.connect('mongodb://localhost/codelab');

/* use session */
app.use(session({
    secret: 'CodeLab1$1$234',
    resave: false,
    saveUninitialized: true
}));

app.use('/', express.static(path.join(__dirname, './../public')));

/* setup routers & static directory */
app.use('/api', api);

<<<<<<< HEAD
// support client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

app.get('/hello', (req, res) => {
  return res.send('Hello CodeLab');
});

// app.get('/empName', (req, res) => {
//
//   const sql = require('mssql');
//
//   var config = {
//         server     : 'SOODIAMOND',
//         user     : 'sa',
//         password : 'dpf5236',
//         database : 'S2Std',
//         options: {
//         // encrypt: true // Use this if you're on Windows Azure
//         instanceName: 'SQLEXPRESS'
//     }
//   };
//
//   sql.connect(config, function (err) {
//
//       if (err) console.log(err);
//       else {
//         const request = new sql.Request()
//         request.query('select top(5)* from employee', (err, result) => {
//           if (err) {
//             console.log(err)
//             sql.close()
//           }
//           else {
//             //console.log(result.recordset);
//             var recordCnt = result.recordset.length;
//             var names = [];
//
//             for (var i = 0; i < recordCnt; i++) {
//               names.push(result.recordset[i].Name)
//             }
//             res.send(names);
//
//             sql.close()
//           }
//         })
//       }
//   });
// });

// handle error
// router 에서 throw err 가 실행되면 이 코드가 실행된다.
=======
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../public/index.html'));
});

/* handle error */
>>>>>>> master
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log('Express is listening on port', port);
});

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
            console.log('webpack-dev-server is listening on port', devPort);
        }
    );
}
