import validators = require('./validators');

export let csv: ColumnDescriptor[] = [
    {
        name: "ID",
        type: 'ID',
        validators: [
            validators.checkLength(1,4),
            validators.checkRequire()
        ]
    },
    {
        name: "Name",
        type: "string",
        validators: [
            validators.checkLength(1,18)
        ]
    },
    {
        name: "Surname",
        type: "string",
        validators: [
            validators.checkLength(1,18)
        ]
    },
    {
        name: "Mail",
        type: 'Mail',
        validators: [
            validators.checkLength(6,18),
            validators.includeElement('@')
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
            validators.checkLength(14,16),
            validators.regex(/^\375 \(17|25|29|33|44\) [0-9]{7}$/)
        ]
    }
];
export interface ColumnDescriptor {
    name: string,
    type: CsvType | string,
    // validators: Array<Validators<string>> | Array<Validators<obj>>;
    validators:  Array<Validators<string>>;
}
export interface CsvType {
    parseString(str: string): this;
}
export interface Validators<T> {
    validate(value: T, csv?:ColumnDescriptor[]) : string[];
}
