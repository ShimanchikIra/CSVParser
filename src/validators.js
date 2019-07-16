"use strict";
exports.__esModule = true;
function checkLength(minLength, maxLength) {
    return {
        validate: function (value) {
            var errors = [];
            if (value.length < minLength || value.length > maxLength)
                errors.push("Length: " + value.length + ", max length: " + maxLength + ", mix length: " + minLength + ";");
            return errors;
        }
    };
}
exports.checkLength = checkLength;
function checkRequire() {
    return {
        validate: function (value) {
            var errors = [];
            if (!value) {
                errors.push('This field is required;');
            }
            return errors;
        }
    };
}
exports.checkRequire = checkRequire;
function checkType(customType) {
    return {
        validate: function (value) {
            var errors = [];
            if (customType.parseString(value) == null)
                errors.push('Invalid data type;');
            return errors;
        }
    };
}
exports.checkType = checkType;
function checkDate() {
    return {
        validate: function (value) {
            var errors = [];
            var day = value.substring(0, 2);
            var month = value.substring(3, 5);
            var year = value.substring(6);
            var date = new Date(month + "/" + day + "/" + year);
            if (isNaN(date.getTime()))
                errors.push("Invalid date");
            return errors;
        }
    };
}
exports.checkDate = checkDate;
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
function isInteger(num) {
    return (num ^ 0) === num;
}
exports.isInteger = isInteger;
