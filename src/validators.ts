import {CsvType, Validators} from "./config";

export function checkLength (min: number, max: number):Validators<string> {
    return  {
        validate: function(value: string): string {
            return value.length<min || value.length>max ? `Length: ${value.length}, max length: ${max}, mix length: ${min};` : '';
        }
    }
}
export function checkRequire():Validators<string> {
    return  {
        validate: function(value: string): string {
            return value ? '' : 'This field is required;';
        }
    }
}
export function checkType(customType:CsvType):Validators<string> {
    return  {
        validate: function(value: string): string {
            return customType.parseString(value)==null ? 'Invalid data type;' : '';
        }
    }
}
export function checkDate():Validators<string> {
    return  {
        validate: function(value: string): string {
            let day:string = value.substring(0,2);
            let month:string = value.substring(3,5);
            let year:string=value.substring(6);
            let date: Date = new Date(`${month}/${day}/${year}`);
            return isNaN(date.getTime()) ? 'Invalid date;' : '';
        }
    }
}
export let ID:CsvType={
    parseString:function (str:string): CsvType | null{
        return isInteger(+str) ? JSON.parse(str) : null;

    }
};
export let Phone:CsvType={
    parseString:function (str:string): CsvType | null {
        const regex:RegExp=/^375 (17|25|29|33|44) [0-9]{7}$/;
        return regex.test(str) ? JSON.parse(str.split(' ').join('')) : null;
    }
};
export let Mail:CsvType={
    parseString:function (str:string): string | null{
        return str.indexOf('@')!=-1 ? str : null;
    }
};
export function isInteger(num:number):boolean {
    return (num ^ 0) === num;
}
