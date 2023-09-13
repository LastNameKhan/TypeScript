interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}


var Users = {
    name: "Aman",
    age: 1,
    id: 1,
    email: ""
}

let user : User = { name: "Aman", id:1, email:""}

interface mycompany extends User {
    salary: number
}

let employee : mycompany = { name: "Aman", id:1, email:"",salary: 1000}


interface Login {
    Login(): User;
}


let [user1, user2,...restUsers] : User[] = [
    {name:"Aman", id:1, email:""},
    {name:"Khan", id:1, email:""},
    {name:"Rahul", id:1, email:""},
]

console.log("user1",user1);
console.log("user2",user2);
console.log("restUsers",restUsers);