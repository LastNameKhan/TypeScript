function add2(num1:number, num2:number,...num3:number[]): number {
    return num1 + num2 + num3.reduce((a,b) => a + b,0);
}

let numbers = [1,2,3,4,5];
console.log(add2(2,3,...numbers))