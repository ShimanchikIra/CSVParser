import {checkRequire, checkLength, checkType, checkDate} from "./validators";

export let ID:CsvType={
     parseString:function (str:string):CsvType | null{
         if (isInteger(+str))
         return Phone=JSON.parse(str);
         else return null;
     }

};
export let Phone:CsvType={
    parseString:function (str:string):CsvType | null {
        let phone:string=str.split(' ').join('');
        const regex:RegExp=/^375 (17|25|29|33|44) [0-9]{7}$/;
        if (regex.test(str)) return Phone=JSON.parse(phone);
        else return null;
    }
};
export let Mail:CsvType={
    parseString:function (str:string): null | string{
        if (str.indexOf('@')!=-1) return str;
        else return null;
    }
};
export let csv: ColumnDescriptor[] = [
    {
        name: "ID",
        type: ID,
        validators: [
            checkLength(1,4),
            checkRequire(),
            checkType(ID)
        ]
    },
    {
        name: "Name",
        type: "string",
        validators: [
            checkLength(1,18),
        ]
    },
    {
        name: "Surname",
        type: "string",
        validators: [
            checkLength(1,18)
        ]
    },
    {
        name: "Mail",
        type: Mail,
        validators: [
            checkLength(6,18),
            checkType(Mail)
        ]
    },
    {
        name: "Date of registration",
        type: "date",
        validators: [
            checkDate()
        ]
    },
    {
        name: "Phone",
        type: Phone,
        validators: [
            checkLength(14,16),
            checkType(Phone)
        ]
    }
];
export interface ColumnDescriptor {
    name: string,
    type: string|CsvType,
    validators:  Array<Validators<string>>
}
export interface CsvType {
    parseString(str: string): this | null | string;
}
export interface Validators<T> {
    validate(value: T) : string[];
}
function isInteger(num:number):boolean {
    return (num ^ 0) === num;
}
