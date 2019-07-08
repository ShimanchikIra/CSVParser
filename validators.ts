import config = require('./config');

export function checkLength(minLength: number, maxLength: number):config.Validators<string> {
    return  {
        validate: function(value: string): string[] {
             let errorsArr:string[]=[];
             if(value.length>=minLength && value.length<=maxLength)
                 return errorsArr;
             else {
                 errorsArr.push("length cannot be ");
                 if (value.length<minLength)
                     errorsArr.push(`less than ${minLength};`);
                 else if (value.length>minLength)
                     errorsArr.push(`more than ${maxLength};`);
                 return errorsArr;
             }
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
 export function regex(regex:RegExp):config.Validators<string> {
     return  {
         validate: function(value: string): string[] {
            let errorsArr:string[]=[];
             if (!regex.test(value[1]))
                errorsArr.push("doesn't meet the regular expression;");
             return errorsArr;
         }
     }
 }
export function includeElement(necessaryElement:string):config.Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errorsArr:string[]=[];
            if (value.indexOf(necessaryElement)==-1)
                errorsArr.push(`doesn't contain '${necessaryElement}';`);
            return errorsArr;
        }
    }
}
export function date(necessaryElement:string):config.Validators<string> {
    return  {
        validate: function(value: string): string[] {
            let errorsArr:string[]=[];
            if (value.indexOf(necessaryElement)==-1)
                errorsArr.push(`doesn't contain '${necessaryElement}';`);
            return errorsArr;
        }
    }
}


