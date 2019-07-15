import {CsvType, Validators} from "./config";

export function checkLength(minLength: number, maxLength: number):Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errors:string[]=[];
            if(value.length<minLength || value.length>maxLength)
                  errors.push(`Length: ${value.length}, max length: ${maxLength}, mix length: ${minLength};`);
            return errors;
        }
    }
}
export function checkRequire():Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errors:string[]=[];
            if(value===''){
                errors.push('This field is required;');
            }
            return errors;
        }
    }
}
export function checkType(customType:CsvType):Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errors:string[]=[];
            if (customType.parseString(value)==null)
                errors.push('Invalid data type;');
            return errors;
        }
    }
}
export function checkDate():Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errors:string[]=[];
            let date: Date = new Date(value);
            if (isNaN(date.getTime())) errors.push("Invalid date");
            return errors;
        }
    }
}
