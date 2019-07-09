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
    // it("Should return correct array when the length of the value less than min", function(){
    //     let min=1, max=4;
    //     let result=validators.checkLength(min,max).validate('');
    //     let exp=["length cannot be ", `less than ${min}`];
    //     expect(result).to.eql(exp);
    // });
    // it("Should return correct array when the length of the value more than max", function(){
    //     let min=1, max=4;
    //     let result=validators.checkLength(min,max).validate('11111');
    //     let exp=["length cannot be ", `more than ${max}`];
    //     expect(result).to.eql(exp);
    // });
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
describe('includeElement', function() {
    it("Should return empty array when the value contains necessary element", function(){
        let result=validators.includeElement('@').validate('Elena@mail.ru').length;
        expect(result).to.eql(0);
    });
    it("Should return not empty array when the value doesn't contain necessary element", function(){
        let result=validators.includeElement('@').validate('Igormail').length;
        expect(result).to.eql(1);
    });
});
describe('regex', function() {
    it("Should return empty array when the value contains necessary element", function(){
        let result=validators.regex(/^\375 \(17|25|29|33|44\) [0-9]{7}$/).validate('375 25 2561421').length;
        expect(result).to.eql(0);
    });
    it("Should return not empty array when the value doesn't contain necessary element", function(){
        let result=validators.regex(/^\375 \(17|25|29|33|44\) [0-9]{7}$/).validate('375 20 251').length;
        expect(result).to.eql(1);
    });
});
