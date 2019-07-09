import csvParser = require('csv-parser');
import fs = require("fs");



fs.createReadStream('Users.csv')
    .pipe(csvParser({ separator: ';' }))
    .on('data', (data) => console.log(data));


interface User {
    ID:string,
    Name:string,
    Surname:string,
    Mail:string,
    'Date of registration':string,
    Phone:string;

}

