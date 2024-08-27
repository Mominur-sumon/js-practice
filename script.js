// console.log('Hello, world!');
// console.log(100);
// console.log(20, "Hello", true);
// const x = 100;
// console.log(x); 
// console.table({ a: 1, b: 2 });

// const styles = 'padding: 10px; color: red; fontSize: 20px';

// console.log('%cHello, world!', styles);
//This is a single iine comment
// console.log('Hello, world!');
// console.log('Hello, world!');
// console.log('Hello, world!');
// console.log('Hello, world!');
// console.log('Hello, world!');
// console.log('Hello, world!'); 

// Ways to declare variables
// var, let, const

// let firstName = 'John';
// let lastName = 'Doe';

// let age = 30;
// console.log(age);
// console.log(firstName, lastName);

// console.log(firstName,lastName, age);

// Naming conventions
// Cannot start with a number
// let 1name = 'John';
// let name1 = 'John';
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[0]);

// arr.push(6);
// console.log(arr);

// const person = {
//     name : 'John',
// };
// person.name = 'Doe';
// console.log(person);

// Declare multiple variables
// let a = 10, b = 20, c = 30;
// console.log(a, b, c);



// Data types in JavaScript
// primitive types
// string - sequence of characters, must be enclosed in quotes or backticks
// nmber - integer, float, NaN, Infinity
// Boolean - true or false
// null - empty value
// undefined - variable that has not been assigned a value
// Symbol - unique value
// bigint - large integers


// non primitive types
// object - key value pairs

// String

// const name = 'John';
// console.log(name);
// console.log(name, typeof name);

// const age = 30.01;
// console.log(age);
// console.log(age, typeof age);

// const name = 'John';
// const age = 30;

// // reference value store in heap memory
// const person = {
//     name: 'Sumon',
//     age: 20,
// };
// let newName = name;
// newName = 'Doe';
// console.log(name, newName);

// let amount = '100';

// amount = parseInt(amount);
// amount = parseFloat(amount);
// amount = Number(amount);
// amount = +amount;
// ammount = 500;
// amount = amount.toString();
// console.log(amount, typeof amount);

// let amount = 'hello';
// amount = parseInt(amount);
// console.log(amount, typeof amount);

// let x = 10;

// x = x + 5;
// x += 5;
// x -= 5;
// x *= 5;
// x /= 5;
// x = "hello" + ' ' +"world";
// x = 2 **3;

// let x ;
// x = '55' + 5;
// x = 5 * '5'
// x =5 + true;
// x = 5 + false;
// // x = t + undefined;
// console.log(x, typeof x);


// let x ;
// const name = 'Mominur';
// const age = 30;
// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// // Template literals
// x = `Hello, my name is ${name} and I am ${age} years old`;

// properties and method

// const s = 'Hello, world';

// x = s.length;

// x = s.__proto__;

// console.log(x, typeof x);

// Capitalize first letter
// const myString = 'developer';

// let myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);

// myNewString = myString[0].toUpperCase() + myString.slice(1);

// myNewString = myString.replace(myString[0], myString[0].toUpperCase());

// console.log(myNewString, typeof myNewString);

// let x;
// const num = new Number(5) ;

// x = num.toString();
// console.log(typeof x);
// x = num.lenth;
// console.log(x);

// Js math object
// let x ;
// x = Math.PI;
// x = Math.E;
// x = Math.round(2.4);
// x = Math.ceil(2.4);

// x = Math.floor(2.8);
// x = Math.sqrt(64.25);
// x = Math.abs(-3);
// x = Math.pow(8, 2);
// x = Math.min(2, 3, 4, 5, 6);
// x = Math.max(2, 3, 4, 5, 6, 7.2);
// x = Math.random();
// x = Math.floor(Math.random() * 6 + 1);
// console.log(x);

// let x, y ;

// x = Math.floor(Math.random() * 100 + 1);

// y = Math.floor(Math.random() * 50 + 1);

// const sum = x + y;
// const sumOutput =`${x} + ${y} = ${sum}`;

// const subtraction = x - y;
// const subtractionOutput =`${x} - ${y} = ${subtraction}`;

// const mulpication = x * y;
// const mulpicationOutput =`${x} * ${y} = ${mulpication}`;

// const division = x / y;
// const divisionOutput =`${x} / ${y} = ${division}`;

// const modulas = x % y;
// const modulasOutput =`${x} % ${y} = ${modulas}`;

// console.log(sumOutput);
// console.log(modulasOutput);
// console.log(subtractionOutput);
// console.log(mulpicationOutput);
// console.log(divisionOutput);

// date object
// let d ;
// d = new Date();
// d = new Date().getFullYear();
// d= new Date(2021, 6, 10);
// d = Date.now();

// console.log(d, typeof d);

// // date Time methods
// let x ;
// let d = new Date();

// x = d.toString();
// x = d.valueOf();
// x = d.getFullYear();
// x = d.getMonth() + 1;
// x = d.getDate();
// x= d.getDay();
// x = d.getHours();
// x = d.getMinutes();
// x = d.getSeconds();
// x = d.getMilliseconds();
// x = d.getTime();
// x = d.getTimezoneOffset();
// x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// x = Intl.DateTimeFormat('default').format(d);
// x= d.toLocaleString('default', 
//     {weekday: 'long'
//     , year: 'numeric'
//     , month: 'long'
//     , day: 'numeric'
//     , hour: 'numeric'
//     , minute: 'numeric'
//     , second: 'numeric'
//     , timeZoneName: 'short'

//     });

// console.log(x);

