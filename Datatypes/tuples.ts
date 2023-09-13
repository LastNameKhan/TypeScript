let swapNums: [firstNumber:number,secondNumber:number];

function swapNumbers(num1:number, num2:number) : [number,number] {
    return [num2,num1]
} 

swapNums = swapNumbers(10,20);

swapNums[0];
swapNums[1];
