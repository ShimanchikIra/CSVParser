"use strict";
exports.__esModule = true;
var csvParser = require("csv-parser");
var fs = require("fs");
var config_1 = require("./config");
var validators_1 = require("./validators");
var db_1 = require("./db");
var results = [];
var dbName = "usersdb";
var dbCollection = "users";
fs.createReadStream('src/Users.csv')
    .pipe(csvParser({ separator: ';' }))
    .on('data', function (data) { results.push(data); })
    .on('end', function () {
    db_1.addUsersToDB(results.filter(function (value) { return validators_1.isValidObj(value, config_1.csv); }), dbName, dbCollection);
});
