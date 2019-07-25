import {CsvType, Validators} from "./config";

export function checkLength (min: number, max: number):Validators<string> {
    return  {
        validate: function(value: string): string[] {
            return value.length<min || value.length>max ? [`Length: ${value.length}, max length: ${max}, mix length: ${min};`] : [];
        }
    }
}
export function checkRequire():Validators<string> {
    return  {
        validate: function(value: string): string[] {
            return value ? [] : ['This field is required;'];
        }
    }
}
export function checkType(customType:CsvType):Validators<string> {
    return  {
        validate: function(value: string): string[] {
            return customType.isParseString(value) ? [] : ['Invalid data type;'];
        }
    }
}
export function checkDate():Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let day:string = value.substring(0,2);
            let month:string = value.substring(3,5);
            let year:string=value.substring(6);
            let date: Date = new Date(`${month}/${day}/${year}`);
            return isNaN(date.getTime()) ? ['Invalid date;'] : [];
        }
    }
}
export let ID:CsvType={
    isParseString:function (str:string): boolean{
        return isInteger(+str);

    }
};
export let Phone:CsvType={
    isParseString:function (str:string): boolean {
        const regex:RegExp=/^375 (17|25|29|33|44) [0-9]{7}$/;
        return regex.test(str);
    }
};
export let Mail:CsvType={
    isParseString:function (str:string): boolean{
        return str.indexOf('@') != -1;
    }
};
export function isInteger(num:number):boolean {
    return (num ^ 0) === num;
}
