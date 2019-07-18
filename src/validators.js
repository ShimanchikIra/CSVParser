"use strict";
exports.__esModule = true;
function checkLength(min, max) {
    return {
        validate: function (value) {
            // let errors:string[]=[];
            // if(value.length<minLength || value.length>maxLength)
            //       errors.push(`Length: ${value.length}, max length: ${maxLength}, mix length: ${minLength};`);
            // return errors;
            return value.length < min || value.length > max ? ["Length: " + value.length + ", max length: " + max + ", mix length: " + min + ";"] : [];
        }
    };
}
exports.checkLength = checkLength;
function checkRequire() {
    return {
        validate: function (value) {
            // let errors:string[]=[];
            // if(!value){
            //     errors.push('This field is required;');
            // }
            // return errors;
            return value ? [] : ['This field is required;'];
        }
    };
}
exports.checkRequire = checkRequire;
function checkType(customType) {
    return {
        validate: function (value) {
            // let errors:string[]=[];
            // if (customType.parseString(value)==null)
            //     errors.push('Invalid data type;');
            // return errors;
            return customType.parseString(value) == null ? ['Invalid data type;'] : [];
        }
    };
}
exports.checkType = checkType;
function checkDate() {
    return {
        validate: function (value) {
            // let errors:string[]=[];
            var day = value.substring(0, 2);
            var month = value.substring(3, 5);
            var year = value.substring(6);
            var date = new Date(month + "/" + day + "/" + year);
            // if (isNaN(date.getTime()))
            //     errors.push("Invalid date");
            // return errors;
            return isNaN(date.getTime()) ? ['Invalid date;'] : [];
        }
    };
}
exports.checkDate = checkDate;
exports.ID = {
    parseString: function (str) {
        // if (isInteger(+str))
        //     return JSON.parse(str);
        // else return null;
        return isInteger(+str) ? JSON.parse(str) : null;
    }
};
exports.Phone = {
    parseString: function (str) {
        // let phone:string=str.split(' ').join('');
        var regex = /^375 (17|25|29|33|44) [0-9]{7}$/;
        // if (regex.test(str)) return Phone=JSON.parse(phone);
        // else return null;
        return regex.test(str) ? JSON.parse(str.split(' ').join('')) : null;
    }
};
exports.Mail = {
    parseString: function (str) {
        // if (str.indexOf('@')!=-1) return str;
        // else return null;
        return str.indexOf('@') != -1 ? str : null;
    }
};
function isInteger(num) {
    return (num ^ 0) === num;
}
exports.isInteger = isInteger;
