const stringTypeName = 'park jinsu';
console.log(typeof stringTypeName);

const age = 24;
console.log(typeof age);

const isServer = true;
console.log(typeof isServer);

console.log(`my name is ${stringTypeName} age -> ${age}`);

console.log(typeof null);
console.log(typeof undefined);

const arr = [`hi`, 1, `bye`, 2]
const numArray = Array(10).fill().map((value, index) => index);
console.log(numArray);

const numMultiply2 = numArray.map(value => value * 2);
console.log(numMultiply2);

numArray.map(value => console.log(value));
for (const value of numMultiply2) {
    console.log(value);
}
