"use strict";
exports.__esModule = true;
var validators_1 = require("../src/validators");
describe('checkLength', function () {
    var testInterval;
    beforeAll(function () {
        testInterval = validators_1.checkLength(1, 4);
    });
    it('validate() should return not empty array when value length is less than minimum border', function () {
        var result = testInterval.validate('').length;
        expect(result).toBe(1);
    });
    it('validate() should return an empty array when value length is in interval', function () {
        var result = testInterval.validate('1').length;
        expect(result).toBe(0);
    });
    it('validate() should return an empty array when value length is in interval', function () {
        var result = testInterval.validate('1111').length;
        expect(result).toBe(0);
    });
    it('validate() should return not empty array when value length is greater then maximum border', function () {
        var result = testInterval.validate('11111').length;
        expect(result).toBe(1);
    });
});
describe('checkRequire', function () {
    it('validate() should return empty array when have value', function () {
        var result = validators_1.checkRequire().validate('1').length;
        expect(result).toBe(0);
    });
    it('validate() should return an empty array which consists error message when we haven\'t value', function () {
        var result = validators_1.checkRequire().validate('');
        expect(result).toContain('This field is required;');
    });
});
describe('checkDate', function () {
    it('validate() should return not empty array', function () {
        var result = validators_1.checkDate().validate('14.23.2017').length;
        expect(result).toBe(1);
    });
    it('validate() should return an empty array when', function () {
        var result = validators_1.checkRequire().validate('23,12,2011').length;
        expect(result).toBe(0);
    });
});
