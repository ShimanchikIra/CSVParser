"use strict";
exports.__esModule = true;
function checkLength(min, max) {
    return {
        validate: function (value) {
            return value.length < min || value.length > max ? ["Length: " + value.length + ", max length: " + max + ", mix length: " + min + ";"] : [];
        }
    };
}
exports.checkLength = checkLength;
function checkRequire() {
    return {
        validate: function (value) {
            return value ? [] : ['This field is required;'];
        }
    };
}
exports.checkRequire = checkRequire;
function checkType(customType) {
    return {
        validate: function (value) {
            return customType.isParseString(value) ? [] : ['Invalid data type;'];
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
            return isNaN(date.getTime()) ? ['Invalid date;'] : [];
        }
    };
}
exports.checkDate = checkDate;
exports.ID = {
    isParseString: function (str) {
        return isInteger(+str);
    }
};
exports.Phone = {
    isParseString: function (str) {
        var regex = /^375 (17|25|29|33|44) [0-9]{7}$/;
        return regex.test(str);
    }
};
exports.Mail = {
    isParseString: function (str) {
        return str.indexOf('@') != -1;
    }
};
function isInteger(num) {
    return (num ^ 0) === num;
}
exports.isInteger = isInteger;
