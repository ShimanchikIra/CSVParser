import {checkRequire, checkLength, checkType, checkDate, ID, Mail, Phone} from "./validators";

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
    validators:  Validators<string>[]
}
export interface CsvType {
    parseString(str: string): this | null | string;
}
export interface Validators<T> {
    validate(value: T) : string;
}

