// function add(num1, num2) {
//     let total = num1 + num2;
//     return total;
// }

// console.log(add(23, 23));

// if you don't assign parameter value that's time will worked default parameter
function concat(num1 = 0, num2 = 0) {
    total = num1 + num2;
    return total;
}
console.log(concat());
console.log(concat(23));
console.log(concat(2, 2));