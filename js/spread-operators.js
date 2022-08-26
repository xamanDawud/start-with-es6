let nums = [23, 25, 2345, 2345];
console.log(...nums);
let maxNums = Math.max(...nums);
console.log(maxNums);

// absolute way is to copy an array
let arr = [23, 54, 23, 54];
let arr2 = [11, ...arr, 00];
console.log(arr);
console.log(arr2);