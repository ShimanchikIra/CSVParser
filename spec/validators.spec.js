"use strict";
exports.__esModule = true;
var validators_1 = require("../src/validators");
describe('calculate', function () {
    it('add', function () {
        var result = validators_1.checkLength(1, 4).validate('111111').length;
        expect(result).toBe(1);
    });
    it('add', function () {
        var result = validators_1.checkLength(1, 4).validate('111').length;
        expect(result).toBe(0);
    });
});
