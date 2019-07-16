"use strict";
exports.__esModule = true;
var validators_1 = require("./validators");
exports.csv = [
    {
        name: "ID",
        type: validators_1.ID,
        validators: [
            validators_1.checkLength(1, 4),
            validators_1.checkRequire(),
            validators_1.checkType(validators_1.ID)
        ]
    },
    {
        name: "Name",
        type: "string",
        validators: [
            validators_1.checkLength(1, 18),
        ]
    },
    {
        name: "Surname",
        type: "string",
        validators: [
            validators_1.checkLength(1, 18)
        ]
    },
    {
        name: "Mail",
        type: validators_1.Mail,
        validators: [
            validators_1.checkLength(6, 18),
            validators_1.checkType(validators_1.Mail)
        ]
    },
    {
        name: "Date of registration",
        type: "date",
        validators: [
            validators_1.checkDate()
        ]
    },
    {
        name: "Phone",
        type: validators_1.Phone,
        validators: [
            validators_1.checkLength(14, 16),
            validators_1.checkType(validators_1.Phone)
        ]
    }
];
