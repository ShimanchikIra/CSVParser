"use strict";
exports.__esModule = true;
var csvParser = require("csv-parser");
var fs = require("fs");
var config_1 = require("./config");
fs.createReadStream('src/Users.csv')
    .pipe(csvParser({ separator: ';' }))
    .on('data', function (data) {
    validateObj(data, config_1.csv).then(function (errors) {
        if (errors.length > 0) {
            console.log.apply(console, ["\nInvalid data: \n" + JSON.stringify(data, null, 1)].concat(errors));
            fs.appendFileSync("src/InvalidData", "\n" + JSON.stringify(data, null, 0) + " " + errors + "\n");
        }
        else {
            fs.appendFileSync("src/ValidData", JSON.stringify(data, null, 0) + "\n");
        }
    })["catch"](function (error) {
        console.log(error.message);
    });
});
function validateObj(value, csv) {
    return new Promise(function (resolve, reject) {
        var errorsArr = [];
        for (var key in value) {
            for (var i = 0; i < csv.length; i++) {
                if (value.hasOwnProperty(csv[i].name) && key === csv[i].name) {
                    for (var j = 0; j < csv[i].validators.length; j++) {
                        var errorsField = csv[i].validators[j].validate(value[key]);
                        if (errorsField.length > 0)
                            errorsArr.push.apply(errorsArr, ["\n" + key + ": "].concat(errorsField));
                    }
                }
            }
        }
        if (errorsArr)
            resolve(errorsArr);
        else {
            var reason = new Error('validation not implemented');
            reject(reason);
        }
    });
}
