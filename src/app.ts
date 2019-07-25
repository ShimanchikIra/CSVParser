import csvParser = require('csv-parser');
import fs = require("fs");
import {ColumnDescriptor, csv} from "./config";
const results = [];

fs.createReadStream('src/Users.csv')
    .pipe(csvParser({ separator: ';' }))
    .on('data',(data)=>{results.push(data)})
    .on('end',()=>{
        fs.appendFileSync("src/ValidData", writeToFile(results.filter(value => isValidObj(value, csv))));
    });

function isValidObj(value:User | Object, csv:ColumnDescriptor[]): boolean{
    let isValid:boolean=true;
    let errorsObj: string[] = [];
    for (let key in value) {
        errorsObj.push(...validation(key, value[key], csv));
    }
    if (errorsObj.length){
        isValid=false;
        console.log(`\nInvalid data: \n${JSON.stringify(value, null, 1)}`, ...errorsObj);
        fs.appendFileSync("src/InvalidData", `\n${JSON.stringify(value, null, 1)} ${errorsObj}\n`);
    }
    return isValid;
}
function validation(key: string, value: string, csv:ColumnDescriptor[]): string[]{
    let errors: string[] = [];
    csv.forEach((columnDescriptor) => {
        if (key === columnDescriptor.name) {
            columnDescriptor.validators.forEach((validator) =>
             {
                if (validator.validate(value).length)
                    errors.push(`\n${key}: `,...validator.validate(value));
            })
        }
    });
    return errors;
}
interface User {
    ID: string,
    Name: string,
    Surname: string,
    Mail: string,
    'Date of registration': string,
    Phone: string;
}
function writeToFile(users: User[] | Object[]): string {
    let out: string='';
    users.forEach((user)=> {
        for (let key in user) {
            out +=`${user[key]},`;
        }
        out +='\n';
    });
   return out;
}
