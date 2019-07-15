import {CsvType, Validators} from "./config";

export function checkLength(minLength: number, maxLength: number):Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errorsArr:string[]=[];
            if(value.length<minLength || value.length>maxLength)
                  errorsArr.push(`Length: ${value.length}, max length: ${maxLength}, mix length: ${minLength};`);
            return errorsArr;
        }
    }
}
export function checkRequire():Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errorsArr:string[]=[];
            if(value===''){
                errorsArr.push('This field is required;');
            }
            return errorsArr;
        }
    }
}
export function checkType(customType:CsvType):Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errorsArr:string[]=[];
            if (customType.parseString(value)==null)
                errorsArr.push('Invalid data type;');
            return errorsArr;
        }
    }
}
export function checkDate():Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errorsArr:string[]=[];
            let date: Date = new Date(value);
            if (isNaN(date.getTime())) errorsArr.push("Invalid date");
            return errorsArr;
        }
    }
}
