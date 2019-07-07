const assert = require("assert");
const validators = require("../validators");


describe('Length.validate', function() {
    it("should return empty array", function(){
        assert.equal(new validators.Length(1,4).validate("1111").length,0);
    });
    it("should return empty array", function(){
        assert.equal(new validators.Length(1,5).validate("1111").length,0);
    });
    it("should return empty array", function(){
        assert.equal(new validators.Length(1,4).validate("1111").length,0);
    });
    it("should return not empty array", function(){
        assert.notEqual(new validators.Length(1,4).validate("").length,0);
    });
    it("should return not empty array", function(){
        assert.notEqual(new validators.Length(1,4).validate("111111").length,0);
    });
});


describe('Phone.validate', function() {
    it("should return empty array", function(){
        assert.equal(new validators.Phone().validate("375 29 3526547").length,0);
    });
    it("should return not empty array", function(){
        assert.notEqual(new validators.Phone().validate("375 28 3526547").length,0);
    });
    // it("should return not empty array", function(){
    //     assert.notEqual(new validators.Phone().validate("375 2935265").length,0);
    // });
});
describe('Email.validate', function() {
    it("should return empty array", function(){
        assert.equal(new validators.Email().validate("Igor@mail.ru").length,0);
    });
    it("should return not empty array", function(){
        assert.notEqual(new validators.Phone().validate("Igormail.ru").length,0);
    });
});