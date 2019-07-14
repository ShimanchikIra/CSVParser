import csvParser = require('csv-parser');
import fs = require("fs");
// import {csv} from "./config";
import config = require('./config');
const results = [];

fs.createReadStream('src/Users.csv')
    .pipe(csvParser({ separator: ';' }))
    .on('data',(data)=>{results.push(data)})
    .on('end',()=>{fs.appendFileSync("src/ValidData", writeToValidFile(results.filter(value => isValidObj(value))));
    });

function isValidObj(value:User): boolean{
    let isValid:boolean=true;
    let errorsObj: string[] = [];
    for (let key in value) {
        let errorsKey:string[]=validation(key, value[key]);
        if (errorsKey.length)
            errorsObj.push(`\n${key}: `, ...errorsKey);
    }
    if (errorsObj.length){
        isValid=false;
        console.log(`\nInvalid data: \n${JSON.stringify(value, null, 1)}`, ...errorsObj);
        fs.appendFileSync("src/InvalidData", `\n${JSON.stringify(value, null, 1)} ${errorsObj}\n`);
    }
    return isValid;
}
function validation(key: string, value: string): string[]{
    let errorsKey: string[] = [];
    config.csv.forEach((columnDescriptor) => {
        if (key === columnDescriptor.name) {
            columnDescriptor.validators.forEach((validator) =>
             {
                if (validator.validate(value).length)
                    errorsKey.push(...validator.validate(value));
            })
        }
    });
    return errorsKey;
}
interface User {
    ID: string,
    Name: string,
    Surname: string,
    Mail: string,
    'Date of registration': string,
    Phone: string;
}
function writeToValidFile(users: User[]): string {
    let out: string=null;
    users.forEach((user)=> {
        for (let key in user) {
            out +=`${user[key]},`;
        }
        out +=`\n`;
    });
   return out;
}
