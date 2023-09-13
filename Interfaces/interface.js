"use strict";
var Users = {
    name: "Aman",
    age: 1,
    id: 1,
    email: ""
};
let user = { name: "Aman", id: 1, email: "" };
let employee = { name: "Aman", id: 1, email: "", salary: 1000 };
let [user1, user2, ...restUsers] = [
    { name: "Aman", id: 1, email: "" },
    { name: "Khan", id: 1, email: "" },
    { name: "Rahul", id: 1, email: "" },
];
console.log("user1", user1);
console.log("user2", user2);
console.log("restUsers", restUsers);
