let emplist : string[];

emplist = ["Aman","Rahul","Harshit","Juber"];

let numlist: Array<number>

numlist = [1,3,2,4,5];

let results = numlist.filter((num) => num>2);

let num = numlist.find((num) => num == 3);
let emp = emplist.find((emp) => emp === "Aman");

let sum = numlist.reduce((acc,num) => acc + num);


console.log("results",results);
console.log("num",num);
console.log("emp",emp);
console.log("sum",sum);