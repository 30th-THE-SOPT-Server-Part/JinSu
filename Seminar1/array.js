const firstArray = [1, 'item', true];
const secondArray = Array(4, null, {item: 'item'});

firstArray.map(item => console.log(item));
secondArray.map(item => console.log(item));

// 함수 선언식
function sum(a, b) {
    return a + b;
}

// 함수 표현식
let sum2 = (a, b) => {
    return a + b;
}

console.log(typeof firstArray)

console.log(typeof 'hi')


const numArr = [1, 2, 3];
const newArr = numArr.map(x => x * 2);

console.log(newArr)
// 2 4 6
