"use strict";
exports.__esModule = true;
var validators_1 = require("./validators");
exports.ID = {
    parseString: function (str) {
        if (isInteger(+str))
            return exports.Phone = JSON.parse(str);
        else
            return null;
    }
};
exports.Phone = {
    parseString: function (str) {
        var phone = str.split(' ').join('');
        var regex = /^375 (17|25|29|33|44) [0-9]{7}$/;
        if (regex.test(str))
            return exports.Phone = JSON.parse(phone);
        else
            return null;
    }
};
exports.Mail = {
    parseString: function (str) {
        if (str.indexOf('@') != -1)
            return str;
        else
            return null;
    }
};
exports.csv = [
    {
        name: "ID",
        type: exports.ID,
        validators: [
            validators_1.checkLength(1, 4),
            validators_1.checkRequire(),
            validators_1.checkType(exports.ID)
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
        type: exports.Mail,
        validators: [
            validators_1.checkLength(6, 18),
            validators_1.checkType(exports.Mail)
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
        type: exports.Phone,
        validators: [
            validators_1.checkLength(14, 16),
            validators_1.checkType(exports.Phone)
        ]
    }
];
function isInteger(num) {
    return (num ^ 0) === num;
}
