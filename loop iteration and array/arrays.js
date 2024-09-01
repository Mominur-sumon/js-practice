// array literal
// const arr = [1, 2, 3, 4, 5, 'hello', true, undefined, null, new Date(), Math.random(), Math.floor(Math.random() * 100 + 1)];

// const arr1 = new Array(1, 2, 3, 4, 5, 'hello', true, undefined, null, new Date(), Math.random(), Math.floor(Math.random() * 100 + 1));

// console.log(arr);
// let x ;
// x = arr[0];

// console.log(arr1);

// console.log(x);

// Basic array operations (methods)

const arr = [23, 34, 98,51,87];

// arr.push(100);
// arr.unshift(200);
// arr.pop();
// arr.shift();
// arr.reverse();
// arr.sort();
// arr.splice(2, 0, 1000, 2000);
// arr.splice(2, 2);
// x = arr.includes(1000);
// console.log(x);
// arr = arr.concat([1, 2, 3, 4, 5]);

// x = arr.slice(1, 3);

// console.log(x);
// console.log(arr);

const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
const barries = ['strawberry', 'blueberry', 'blackberry'];

// fruits.push(barries);

// console.log(fruits);
// console.log(fruits[5][1]);

// const allFruits = [fruits, barries];
// x = fruits.concat(barries);
// console.log(x);
// console.log(x.length);

// // Spread operator(...)
// const allFruits = [...fruits, ...barries];
// console.log(allFruits);

// Flaten an array
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, [8, 9], 10, [15, 20]];
// console.log(arr2);
// console.log(arr2.flat()); 

// Stattic method on Array

// x = Array.from('12345');
// console.log(x);

// const a = 1 ;
// const b = 2;
// const c = 3;
// const d = 4;

// x = Array.of(a, b, c, d);
// console.log(x);

// Array Challenges 1

// const arr1 = [1, 2, 3, 4, 5];

// x = arr1.concat([6]);
// x.reverse();
// console.log(x);

// Array Challenges 2
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5,6, 7, 8, 9, 10];

// Solution
// const arr3 = arr1.slice(0,4).concat(arr2);
// console.log(arr3);

// Object Literals

// const person = {
//     firstName: 'Md Mominur',
//     lastName: 'Rahman',
//     age: 30,
//     email: "mominur.sumon1@gmail.com",
//     adress :{
//         city: 'Dhaka',
//         country: 'Bangladesh',
//     }
// };

// x = person.firstName;
// x= person['lastName'];
// console.log(x);
// y = person.adress.city;
// console.log(y);
// console.log(person);
// delete person.age;
// console.log(person);

// let x ;
// // const todo = {};

// const todo = new Object();
// todo.id = 1 ;
// todo.name = 'Learn JavaScript';
// todo.isCompleted = true;

// x = todo;

// const person = {
//     adress : {
//         city: 'Dhaka',
//         country: 'Bangladesh',
//     }
// }
// x = person.adress.city;

// const obj1 = {
//     a: 1,
//     b: 2,
// }
// const obj2 = {
//     d: 3,
//     e: 4,
// }


// const obj3 ={obj1, obj2};
// const obj4 = {...obj1, ...obj2};
// const obj5 = Object.assign({},  obj1, obj2);

// const tudos = [
//     {
//         id: 1,
//         name: 'Learn JavaScript',
//         isCompleted: true,
//     },
//     {
//         id: 2,
//         name: 'Learn React',
//         isCompleted: false,
//     },
//     {
//         id: 3,
//         name: 'Learn Node',
//         isCompleted: false,
//     },
// ]

// x = obj3;
// x = obj4;
// x = obj5;
// x = tudos ;
// x = Object.keys(tudos);
// x = Object.values(tudos);
// x = Object.entries(tudos);
// x = tudos.length;
// x = tudos.hasOwnProperty('id');
// console.log(x);

// const firstName = 'Md Mominur';
// const lastName = 'Rahman';
// const age = 30;
// const person = {
//     firstName,
//     lastName,
//     age,
// };
// console.log(person);

// Object Destructuring

// const tudo ={
//     id: 1,
//     name: 'Learn JavaScript',
//     isCompleted: true,
// }

// const {id, name, isCompleted} = tudo;
// console.log(id, name, isCompleted);

// // Distructure arrays
// const arr2 = [1, 2, 3, 4, 5];
// const  [first, second] = arr2;

// console.log(first, second);
// const [first1 , second1, ...rest] = arr2;
// console.log(first1, second1, rest);

// const post = {
//     id: 3,
//     nome: 'José',
//     idade: 35,
//     cidade: 'Curitiba'
// }
// // convert tp json string

// const str = JSON.stringify(post);

// // convert to json object
// const obj = JSON.parse(str);
// console.log(str);
// console.log(obj);

// const post1 = [
//     {
//         id: 1,
//         nome: 'José',
//         idade: 35,
//         cidade: 'Curitiba'
//     },
//     {
//         id: 2,
//         nome: 'Maria',
//         idade: 25,
//         cidade: 'São Paulo'
//     },
//     {
//         id: 3,
//         nome: 'João',
//         idade: 45,
//         cidade: 'Rio de Janeiro'
//     }
// ]

// const str1 = JSON.stringify(post1);
