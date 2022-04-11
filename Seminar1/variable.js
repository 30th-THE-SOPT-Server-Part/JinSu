// var 로 선언한 변수는 재할당, 중복 선언이 가능하다
var variable1 = "var";
var variable1 = "new var";
console.log(variable1);

// let 으로 선언한 변수는 재할당은 가능하나 중복 선언이 불가능하다.
let letVariable = "let";
// let letVariable = "YEET!";
console.log(letVariable);

// const variable3 = "const variable";
// const variable3 = "new const variable";
// const 로 선언한 변수는 재할당, 중복 선언이 불가능하다.
const constVariable = "const";
// constVariable = "";
// const constVariable = "new constVariable"
console.log(constVariable)
