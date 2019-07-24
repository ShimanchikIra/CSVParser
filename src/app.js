"use strict";
exports.__esModule = true;
var csvParser = require("csv-parser");
var fs = require("fs");
var config_1 = require("./config");
var results = [];
fs.createReadStream('src/Users.csv')
    .pipe(csvParser({ separator: ';' }))
    .on('data', function (data) { results.push(data); })
    .on('end', function () {
    fs.appendFileSync("src/ValidData", writeToFile(results.filter(function (value) { return isValidObj(value, config_1.csv); })));
});
function isValidObj(value, csv) {
    var isValid = true;
    var errorsObj = [];
    for (var key in value) {
        errorsObj.push.apply(errorsObj, validation(key, value[key], csv));
    }
    if (errorsObj.length) {
        isValid = false;
        console.log.apply(console, ["\nInvalid data: \n" + JSON.stringify(value, null, 1)].concat(errorsObj));
        fs.appendFileSync("src/InvalidData", "\n" + JSON.stringify(value, null, 1) + " " + errorsObj + "\n");
    }
    return isValid;
}
function validation(key, value, csv) {
    var errors = [];
    csv.forEach(function (columnDescriptor) {
        if (key === columnDescriptor.name) {
            columnDescriptor.validators.forEach(function (validator) {
                if (validator.validate(value).length)
                    errors.push("\n" + key + ": ", validator.validate(value));
            });
        }
    });
    return errors;
}
function writeToFile(users) {
    var out = '';
    users.forEach(function (user) {
        for (var key in user) {
            out += user[key] + ",";
        }
        out += '\n';
    });
    return out;
}
