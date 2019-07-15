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
            if (value === '') {
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
            var date = new Date(value);
            if (isNaN(date.getTime()))
                errors.push("Invalid date");
            return errors;
        }
    };
}
exports.checkDate = checkDate;
