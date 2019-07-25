import csvParser = require('csv-parser');
import fs = require("fs");
import {csv} from "./config";
import {isValidObj} from "./validators";
import {addUsersToDB} from "./db";
const results = [];
const dbName: string = "usersdb";
const dbCollection: string = "users";

fs.createReadStream('src/Users.csv')
    .pipe(csvParser({ separator: ';' }))
    .on('data',(data)=>{results.push(data)})
    .on('end',()=>{
       addUsersToDB(results.filter(value => isValidObj(value, csv)), dbName, dbCollection);
    });

