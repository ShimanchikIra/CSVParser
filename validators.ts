import config = require('./config');

export class Length implements config.Validators<string>{
    private readonly minLength: number;
    private readonly maxLength: number;
    errorArray:string[]=[];
    constructor(min: number, max: number) {
        this.minLength = min;
        this.maxLength = max;
    }
    validate(value: string): string[] {
        if(value.length<this.minLength || value.length>this.maxLength)
            this.errorArray.push('string length ${value} is not correct: ');
        return this.errorArray;
    }
}

export class Phone implements config.Validators<string>{
    errorArray:string[]=[];
    validate(value: string): string[] {
        let regex:RegExp=/^\375 \(17|29|33|44\) [0-9]{7}$/;
        if (!regex.test(value))
            this.errorArray.push("Phone is not correct");
        return this.errorArray;
    }
}
export class Email implements config.Validators<string>{
    errorArray:string[]=[];
    validate(value: string): string[] {
        if (value.indexOf('@')==-1)
            this.errorArray.push(`This string ${value} in not email address because it doesn't consist '@'`);
        return this.errorArray;
    }
}
export class Date implements config.Validators<string>{
    errorArray:string[]=[];
    date:Date=new Date;
    validate(value: string): string[] {
        if (value.indexOf('@')==-1)
            this.errorArray.push(`This string ${value} in not email address because it doesn't consist '@'`);
        return this.errorArray;
    }
}