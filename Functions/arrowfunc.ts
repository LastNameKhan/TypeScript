//subtraction

const sub = (num1: number, num2: number): number => {
return num1 - num2;
}

console.log(sub(2,1));

//multiplication

const multi = (num1: number, num2:number): number => {
    return num1 * num2
}

console.log(multi(2,3));

//Optional Parameter with division

const div = (num1: number, num2:number, num3?:number):number => {
    return num1/num2
}

console.log(div(4,2));

//condition with optional

const condition = (num1:number,num2:number,num3?:number):number => {
    return num3? num1+num2+num3 : num1 + num2
}

console.log("Two Numbers",condition(1,2));
console.log("Three Numbers",condition(1,2,3));