import validators = require('./validators');

export let csv: ColumnDescriptor[] = [
    {
        name: "ID",
        type: 'ID',
        validators: [
            new validators.Length(1,4)
        ]
    },
    {
        name: "Name",
        type: "string",
        validators: [
            new validators.Length(1,18)
        ]
    },
    {
        name: "Surname",
        type: "string",
        validators: [
            new validators.Length(1,18)
        ]
    },
    {
        name: "Mail",
        type: 'Mail',
        validators: [
            new validators.Length(6,18),
            new validators.Email()
        ]
    },
    {
        name: "Date of registration",
        type: "date",
        validators: [

        ]
    },
    {
        name: "Phone",
        type: 'Phone',
        validators: [
            new validators.Length(14,16),
            new validators.Phone()
        ]
    }
];

export interface ColumnDescriptor {
    name: string,
    type: CsvType | string,
    validators: Array<Validators<string>>
}
export interface CsvType {
    parseString(str: string): this;
}
export interface Validators<T> {
    errorArray:string[];
    validate(value: T) : string[];
}