"use strict";
exports.__esModule = true;
function checkLength(minLength, maxLength) {
    return {
        validate: function (value) {
            var errorsArr = [];
            if (value.length < minLength || value.length > maxLength)
                errorsArr.push("Length: " + value.length + ", max length: " + maxLength + ", mix length: " + minLength + ";");
            return errorsArr;
        }
    };
}
exports.checkLength = checkLength;
function checkRequire() {
    return {
        validate: function (value) {
            var errorsArr = [];
            if (value === '') {
                errorsArr.push('This field is required;');
            }
            return errorsArr;
        }
    };
}
exports.checkRequire = checkRequire;
function checkType(customType) {
    return {
        validate: function (value) {
            var errorsArr = [];
            if (customType.parseString(value) == null)
                errorsArr.push('Invalid data type;');
            return errorsArr;
        }
    };
}
exports.checkType = checkType;
function checkDate() {
    return {
        validate: function (value) {
            var errorsArr = [];
            var date = new Date(value);
            if (isNaN(date.getTime()))
                errorsArr.push("Invalid date");
            return errorsArr;
        }
    };
}
exports.checkDate = checkDate;
