function sayHello() {
    console.log('Hello');

}
sayHello();

function add(num1, num2) {
    console.log(num1 + num2);
}
add(10, 20);

function add1(num1, num2) {
    return num1 + num2;
}
console.log(add1(10, 20));

function registerUser(username) {
    return `Registered ${username}`;
}
console.log(registerUser('John'));

function userRegister1(username = 'Guest') {
    return `Registered ${username}`;
}
console.log(userRegister1());
console.log(userRegister1('John'));

function sum(...numbers) {
    // return numbers ;
    let result = 0;
    for (const num of numbers) {
        result += num;
    }
    return result;
}
console.log(sum(1, 2, 3, 4, 5));

//Object as parameter

function logInUser(user) {
    return `the user ${user.username} is logged in with ${user.password}`;
}

const user = { username: 'John', password: '12345' };
console.log(logInUser(user));

//Arrays as parameter

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];

}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getRandom(numbers));

const x = 10;
function test() {
    const x = 20;
    console.log(x); //20
}
test();
console.log(x); //10

// nested function

function outer() {
    const outerVar = 'Outer';
    function inner() {
        const innerVar = 'Inner';
        console.log(innerVar);
        console.log(outerVar);
    }
    inner();
}
outer();
// We can acces parent variable bt can't access child variable

if (true) {
    const x = 100;
    if (x === 100) {
        const y = 200;
        console.log(x);
        console.log(y);
    }
    //console.log(y); //Error because y is not defined
}


//normal function
function addDollarSign(value) {
    return '$' + value;
}
console.log(addDollarSign(10));
// function expression
const addPlusSign = function (value) {
    return '+' + value;
};
console.log(addPlusSign(10));

//Arrow function
const addHashSign = value => '#' + value;
console.log(addHashSign(10));

const addTwoValues = (value1, value2) => value1 + value2;
console.log(addTwoValues(10, 20));

const addThreeValues = (value1, value2, value3) => { 
    return value1 + value2 + value3 
};
console.log(addThreeValues(10, 20, 30));  


// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log('IIFE');
})();

const user1 = {
    name: 'John',
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
};
user1.greet();

(function (name) {
    console.log(`Hello ${name}`);
})('John');

// Jusscript is a single threaded language and synchronous execution 