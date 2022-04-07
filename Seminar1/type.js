var isTrueValue = true;
var strValue = 'hello';
var numValue = 2;
// string type 을 number 타입에 할당 할 수 없음
// const sum: number = 'sum number';
var numberTypeArray = [1, 2, 3];
var stringTypeArray = ['hello', 'world'];
var objArr = [
    { item: 'value' },
    { itme: 'value2' }
];
// objArr.map(obj => {
//     console.log(`item: ${obj.item1}`)
// })
// objArr.map((obj: any) => {
//     console.log(`item: ${obj.item1}`);
// })
/**
 * object vs Object
 */
var foo = function (obj) {
    console.log(obj);
};
var boo = function (obj) {
    console.log(obj);
};
// foo('hi');
// Argument of type 'string' is not assignable to parameter of type 'object'.
boo('hi');
/**
 * function return type
 */
function foo2(a, b) {
    return a + b;
}
var boo2 = function (a, b) {
    return a + b;
};
var noReturn = function () {
    console.log('hihi');
};
// foo2('hello', 2);
// Argument of type 'string' is not assignable to parameter of type 'number'
/**
 * null , undefined
 */
var a = null;
// let x: null = 2;
// Type '2' is not assignable to type 'null'
var b = undefined;
// let y: undefined = null;
// Type 'null' is not assignable to type 'undefined'.
console.log(b);
/**
 * Type assertions
 */
// angle-bracket
var myName = '채정아';
var myNameLength = myName.length;
// as
var yourName = "강민재";
var yourNameLength = yourName.length;
/**
 * any
 */
var unknown = {
    name: '채정아',
    age: 18,
    organization: 'SOPT',
    completion: [28, 29]
};
console.log(unknown);
