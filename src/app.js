"use strict";
exports.__esModule = true;
var csvParser = require("csv-parser");
var fs = require("fs");
// import {csv} from "./config";
var config = require("./config");
var results = [];
fs.createReadStream('src/Users.csv')
    .pipe(csvParser({ separator: ';' }))
    .on('data', function (data) { results.push(data); })
    .on('end', function () {
    fs.appendFileSync("src/ValidData", writeToValidFile(results.filter(function (value) { return isValidObj(value); })));
});
function isValidObj(value) {
    var isValid = true;
    var errorsObj = [];
    for (var key in value) {
        var errorsKey = validation(key, value[key]);
        if (errorsKey.length)
            errorsObj.push.apply(errorsObj, ["\n" + key + ": "].concat(errorsKey));
    }
    if (errorsObj.length) {
        isValid = false;
        console.log.apply(console, ["\nInvalid data: \n" + JSON.stringify(value, null, 1)].concat(errorsObj));
        fs.appendFileSync("src/InvalidData", "\n" + JSON.stringify(value, null, 1) + " " + errorsObj + "\n");
    }
    return isValid;
}
function validation(key, value) {
    var errorsKey = [];
    config.csv.forEach(function (columnDescriptor) {
        if (key === columnDescriptor.name) {
            columnDescriptor.validators.forEach(function (validator) {
                if (validator.validate(value).length)
                    errorsKey.push.apply(errorsKey, validator.validate(value));
            });
        }
    });
    return errorsKey;
}
function writeToValidFile(users) {
    var out = null;
    users.forEach(function (user) {
        for (var key in user) {
            out += user[key] + ",";
        }
        out += "\n";
    });
    return out;
}
