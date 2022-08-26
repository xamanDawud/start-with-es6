//Object Destructuring
let student = {
    name: "Abdul Qadir",
    age: 23,
    roll: "23564536",
    address: "khilgau,Dhaka",
};

let { name, age } = student;
console.log(name);

// Array destructuring
let nums = [23, 5, 35, 24, 22];
let [zero, one, two, three] = nums;
console.log(zero);
console.log(zero, one, three);

// A example

function getName() {
    return ["xaman", "Dawud"];
}

let [first, second] = getName();
console.log(first);