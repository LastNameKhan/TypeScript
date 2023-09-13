"use strict";
//subtraction
const sub = (num1, num2) => {
    return num1 - num2;
};
console.log(sub(2, 1));
//multiplication
const multi = (num1, num2) => {
    return num1 * num2;
};
console.log(multi(2, 3));
//Optional Parameter with division
const div = (num1, num2, num3) => {
    return num1 / num2;
};
console.log(div(4, 2));
//condition with optional
const condition = (num1, num2, num3) => {
    return num3 ? num1 + num2 + num3 : num1 + num2;
};
console.log("Two Numbers", condition(1, 2));
console.log("Three Numbers", condition(1, 2, 3));
