// Task One
let multiply = (x, y, z) => x * y * z;
let result_multi = multiply(23, 5, 2);
console.log(result_multi);

// Task Two
let useBacktick = `I am a web developer
I love to code
I love to eat biryani`;
console.log(useBacktick);

// Task Number Three
let usingArrowWithDefault = (fName, lName = "Dawud") => `${fName} ${lName}`;
let name = usingArrowWithDefault("Xaman");
console.log(name);

// Task Number Four

let getEventFriend = (friends) => {
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i];
        let friendLength = friend.length;
        if (friendLength % 2 === 0) {
            console.log(friend);
        }
    }
};

let friends = getEventFriend([
    "zovan",
    "sayedul",
    "Muhibur",
    "Isra",
    "Shakit",
    "Moinul Islam Parvez",
]);
console.log(friends);

// Task Number Five

let squareAndAverage = (arr) => {
    let sum = "";
    for (element of arr) {
        let square = element * element;
        sum += square;
    }
    console.log(arr.length / sum);
};

let arr = squareAndAverage([3, 5, 4, 6]);

// Task Number Six

let joinTwoArr = (arr1, arr2) => {
    let firstArr = arr1;
    let secondArr = arr2;
    let joinTwoArr = [...firstArr, ...secondArr];
    let findMaxNum = Math.max(...joinTwoArr);
    console.log(findMaxNum);
};

let twoArr = joinTwoArr([23, 5, 23, 523], [23, 563, 6326, 745]);

// Task Number Seven