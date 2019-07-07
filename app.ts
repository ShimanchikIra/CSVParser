import fs = require("fs");
import  csvParser = require('csv-parser');
// import config = require('./config');

fs.createReadStream('Users.csv')
    .pipe(csvParser({ separator: ';' }))
    .on('data', (data) => { console.log(data)})//{validate(data, config.csv);outputResult(validate, data, config.csv)})
    .on('end', () => {console.log('end');
    });


