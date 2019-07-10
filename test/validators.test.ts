const expect=require('chai').expect;
const validators = require("../validators");

describe('checkLength', function() {
    it("Should return empty array when the length of the value is in interval", function(){
        let result=validators.checkLength(1,4).validate('1111').length;
        expect(result).to.eql(0);
    });
    it("Should return empty array when the length of the value is in interval", function(){
        let result=validators.checkLength(1,4).validate('111').length;
        expect(result).to.eql(0);
    });
    it("Should return empty array when the length of the value is in interval", function(){
        let result=validators.checkLength(1,4).validate('1').length;
        expect(result).to.eql(0);
    });
    it("Should return not empty array when the length of the value isn't in interval", function(){
        let result=validators.checkLength(1,4).validate('11111').length;
        expect(result).to.eql(1);
    });
    it("Should return not empty array when the length of the value isn't in interval", function(){
        let result=validators.checkLength(1,4).validate('').length;
        expect(result).to.eql(1);
    });
});

describe('checkRequire', function() {
    it("Should return empty array when the value is not null", function(){
        let result=validators.checkRequire().validate('1111').length;
        expect(result).to.eql(0);
    });
    it("Should return not empty array when the value is null", function(){
        let result=validators.checkRequire().validate(null).length;
        expect(result).to.eql(1);
    });
    it("Should return not empty array when the value is empty line", function(){
        let result=validators.checkRequire().validate('').length;
        expect(result).to.eql(1);
    });
});

