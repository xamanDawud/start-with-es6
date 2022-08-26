// arrow function with one parameter
let add = (num) => num * 3;
let result = add(2);
console.log(result);

// arrow function with multi parameter
let multiParameter = (a, b, c) => a * b * c;
let result2 = multiParameter(23, 23, 23);
console.log(result2);

// arrow function with multi line
let addAll = (x, y, z) => {
    let res = x + y;
    let res2 = res + z;
    return res2;
};

let result3 = addAll(10, 20, 30);
console.log(result3);