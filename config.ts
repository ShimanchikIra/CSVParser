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
            new validators.Length(6,18)
        ]
    },
    {
        name: "Date of Registration",
        type: "date",
        validators: [
            new validators.Length(14,16)
        ]
    },
    {
        name: "Phone",
        type: 'Phone',
        validators: [
            new validators.Length(9,12)
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
    /** if return empty array then object valid */
    validate(value: T) : string[];
}