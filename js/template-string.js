// this isn't do break the line
const multiLine =
    "This is the number one summery" +
    "This is the number two summery" +
    "This is the three number summery";
console.log(multiLine);

// you can use the backtick/template string for braking line in one variable
let newMultiLine = `This is the line number one
this is the line number two
this is the line number threee
this is the line number four
this is the line number five
this is the line number six`;
console.log(newMultiLine);

// if you want to write summery with added the value, this is tuff without template string
let a = 23;
let b = 55;
let abSummery =
    a +
    ": " +
    "is the smallest number on the file and" +
    " :" +
    b +
    " " +
    "is the biggest number on the file";
console.log(abSummery);

// You can use template string and explore the value with string very easily
let c = 56;
let d = 88;
let cdNewSummery = `${c} is the smallest number on this scopw and ${d} is the biggest number on this scope`;
console.log(cdNewSummery);