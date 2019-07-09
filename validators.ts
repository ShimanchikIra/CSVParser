import config = require('./config');
import {CsvType} from "./config";

export function checkLength(minLength: number, maxLength: number):config.Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errorsArr:string[]=[];
            if(value.length<minLength || value.length>maxLength)
                  errorsArr.push(`length: ${value.length}, max length: ${maxLength}, mix length: ${minLength};`);
            return errorsArr;
        }
    }
}
export function checkRequire():config.Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errorsArr:string[]=[];
            if(value==null || value==''){
                errorsArr.push('this field is required;');
            }
            return errorsArr;
        }
    }
}
export function checkType(customType:CsvType):config.Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errorsArr:string[]=[];
            if (customType.parseString(value)==null)  errorsArr.push('invalid data type;');
            return errorsArr;
        }
    }
}

