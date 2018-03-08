import express from 'express';
// import empInfo from '../models/empInfo';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('get empName in server');

    const sql = require('mssql');

    var config = {
          server     : 'SOODIAMOND',
          user     : 'sa',
          password : 'dpf5236',
          database : 'S2Std',
          options: {
          // encrypt: true // Use this if you're on Windows Azure
          instanceName: 'SQLEXPRESS'
      }
    };

    sql.connect(config, function (err) {

        if (err) console.log(err);
        else {
          const request = new sql.Request()
          request.query('select top(5)* from employee', (err, result) => {
            if (err) {
              console.log(err)
              sql.close()
            }
            else {
              //console.log(result.recordset);
              var recordCnt = result.recordset.length;
              var names = [];

              for (var i = 0; i < recordCnt; i++) {
                names.push(result.recordset[i].Name)
              }
              console.log(names);
              res.send(names);


              sql.close()
            }
          })
        }
    });
});

export default router;
