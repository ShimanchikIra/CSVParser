import {ColumnDescriptor, CsvType, User, Validators} from "./config";
import fs = require("fs");

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
export function isValidObj(value: User | Object, csv:ColumnDescriptor[]): boolean{
    let isValid:boolean=true;
    let errorsObj: string[] = [];
    for (let key in value) {
        errorsObj.push(...validation(key, value[key], csv));
    }
    if (errorsObj.length){
        isValid=false;
        console.log(`\nInvalid data: \n${JSON.stringify(value, null, 1)}`, ...errorsObj);
        fs.appendFileSync("src/InvalidData", `\n${JSON.stringify(value, null, 1)} ${errorsObj}\n`);
    }
    return isValid;
}
export function validation(key: string, value: string, csv:ColumnDescriptor[]): string[]{
    let errors: string[] = [];
    csv.forEach((columnDescriptor) => {
        if (key === columnDescriptor.name) {
            columnDescriptor.validators.forEach((validator) =>
            {
                if (validator.validate(value).length)
                    errors.push(`\n${key}: `,...validator.validate(value));
            })
        }
    });
    return errors;
}
