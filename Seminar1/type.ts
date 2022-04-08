let isTrueValue: boolean = true;

const strValue: string = 'hello';

let numValue: number = 2;

// string type 을 number 타입에 할당 할 수 없음
// const sum: number = 'sum number';

const numberTypeArray: number[] = [1, 2, 3];

const stringTypeArray: Array<string> = ['hello', 'world'];

const objArr: {}[] = [
    {item: 'value'},
    {item: 'value2'}
];

objArr.map(obj => {
    console.log(`item: ${obj}`)
})
// objArr.map((obj: any) => {
//     console.log(`item: ${obj.item1}`);
// })

/**
 * object vs Object
 */

const foo = (obj: object): void => {
    console.log(obj);
};

const boo = (obj: Object): void => {
    console.log(obj);
}

// foo('hi');
// Argument of type 'string' is not assignable to parameter of type 'object'.

boo('hi');


/**
 * function return type
 */

function foo2(a: number, b: number): number {
    return a + b;
}

const boo2 = (a: number, b: number): number => {
    return a + b;
}

const noReturn = (): void => {
    console.log('hihi');
}

// foo2('hello', 2);
// Argument of type 'string' is not assignable to parameter of type 'number'

/**
 * null , undefined
 */

let a: null = null;

// let x: null = 2;
// Type '2' is not assignable to type 'null'

let b: undefined = undefined;

// let y: undefined = null;
// Type 'null' is not assignable to type 'undefined'.

console.log(b);

/**
 * Type assertions
 */

// angle-bracket
let myName: any = '나의 이름';
let myNameLength: number = (<string>myName).length;

// as
let yourName: any = "너의 이름";
let yourNameLength: number = (yourName as string).length;

/**
 * any
 */

const unknown: any = {
    name: '나 와이비 박진수',
    age: 0,
    organization: 'SOPT',
    completion: [30]
}

console.log(unknown);

