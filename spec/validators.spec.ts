import {checkDate, checkLength, checkRequire} from "../src/validators";
import {Validators} from "../src/config";

describe('checkLength', function() {
    let testInterval:Validators<string>;
    beforeAll(function() {
        testInterval=checkLength(1,4);
    });
    it('validate() should return not empty array when value length is less than minimum border', function() {
        let result:number = testInterval.validate('').length;
        expect(result).toBe(1);
    });
    it('validate() should return an empty array when value length is in interval', function() {
        let result:number = testInterval.validate('1').length;
        expect(result).toBe(0);
    });
    it('validate() should return an empty array when value length is in interval', function() {
        let result:number = testInterval.validate('1111').length;
        expect(result).toBe(0);
    });
    it('validate() should return not empty array when value length is greater then maximum border', function() {
        let result:number = testInterval.validate('11111').length;
        expect(result).toBe(1);
    });
});
describe('checkRequire', function() {
    it('validate() should return empty array when have value', function() {
        let result:number = checkRequire().validate('1').length;
        expect(result).toBe(0);
    });
    it('validate() should return an empty array which consists error message when we haven\'t value', function() {
        let result:string[] = checkRequire().validate('');
        expect(result).toContain('This field is required;');
    });
});
describe('checkDate', function() {
    it('validate() should return not empty array', function() {
        let result:number = checkDate().validate('14.23.2017').length;
        expect(result).toBe(1);
    });
    it('validate() should return an empty array when', function() {
        let result:number = checkRequire().validate('23,12,2011').length;
        expect(result).toBe(0);
    });
});
