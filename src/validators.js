"use strict";
exports.__esModule = true;
function checkLength(min, max) {
    return {
        validate: function (value) {
            return value.length < min || value.length > max ? "Length: " + value.length + ", max length: " + max + ", mix length: " + min + ";" : '';
        }
    };
}
exports.checkLength = checkLength;
function checkRequire() {
    return {
        validate: function (value) {
            return value ? '' : 'This field is required;';
        }
    };
}
exports.checkRequire = checkRequire;
function checkType(customType) {
    return {
        validate: function (value) {
            return customType.parseString(value) == null ? 'Invalid data type;' : '';
        }
    };
}
exports.checkType = checkType;
function checkDate() {
    return {
        validate: function (value) {
            var day = value.substring(0, 2);
            var month = value.substring(3, 5);
            var year = value.substring(6);
            var date = new Date(month + "/" + day + "/" + year);
            return isNaN(date.getTime()) ? 'Invalid date;' : '';
        }
    };
}
exports.checkDate = checkDate;
exports.ID = {
    parseString: function (str) {
        return isInteger(+str) ? JSON.parse(str) : null;
    }
};
exports.Phone = {
    parseString: function (str) {
        var regex = /^375 (17|25|29|33|44) [0-9]{7}$/;
        return regex.test(str) ? JSON.parse(str.split(' ').join('')) : null;
    }
};
exports.Mail = {
    parseString: function (str) {
        return str.indexOf('@') != -1 ? str : null;
    }
};
function isInteger(num) {
    return (num ^ 0) === num;
}
exports.isInteger = isInteger;
