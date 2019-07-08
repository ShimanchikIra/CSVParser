import csvParser = require('csv-parser');
import fs = require("fs");
// import config = require('./config');
// import {ColumnDescriptor} from "./config";

fs.createReadStream('Users.csv')
    .pipe(csvParser({ separator: ';' }))
    .on('data', (data) => console.log(data))
    .on('end', () => {console.log('end');
    });

