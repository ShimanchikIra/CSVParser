import csvParser = require('csv-parser');
import fs = require("fs");
import {csv, ColumnDescriptor} from "./config";


fs.createReadStream('Users.csv')
    .pipe(csvParser({ separator: ';' }))
    .on('data', (data) => {validateObj(data, csv).then(errors=>{
        if (errors.length>0){
            console.log(`\nInvalid data: \n${JSON.stringify(data, null, 1)}`, ...errors);
        } else {
        }
    }).catch(function (error) {
        console.log(error.message);
    })
    });


interface User {
    ID:string,
    Name:string,
    Surname:string,
    Mail:string,
    'Date of registration':string,
    Phone:string;
}
function validateObj(value: User, csv: ColumnDescriptor[]):Promise<string[]> {
    return new Promise(function (resolve, reject) {
        let errorsArr: string[] = [];
        for (let key in value) {
            for (let i = 0; i < csv.length; i++) {
                if (value.hasOwnProperty(csv[i].name) && key === csv[i].name) {
                    for (let j = 0; j < csv[i].validators.length; j++) {
                        let errorsField: string[] = csv[i].validators[j].validate(value[key]);
                        if (errorsField.length > 0)
                            errorsArr.push(`\n${key}: `, ...errorsField);
                    }
                }
            }
        }
        if (errorsArr)
            resolve(errorsArr);
        else {
            let reason = new Error('validation not implemented');
            reject(reason);
        }
    })
}

