import {checkLength} from "../src/validators";

describe('calculate', function() {
    it('add', function() {
        let result = checkLength(1,4).validate('111111').length;
        expect(result).toBe(1);
    });
    it('add', function() {
        let result = checkLength(1,4).validate('111').length;
        expect(result).toBe(0);
    });
});
