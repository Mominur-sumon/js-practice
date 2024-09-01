const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // expected output: 55

const sum1 = numbers.reduce ((acc, cur) => acc + cur, 10); // 10 is the initial value of acc
console.log(sum1); // expected output: 55

//using a for loop
const sum3 = () => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sum3()); // expected output: 55

const card  = [
    {id : 1, name : 'Mominur', age : 25},
    {id : 2, name : 'Sumon', age : 22},
    {id : 3, name : 'Rahman', age : 23},
    {id : 4, name : 'Sakib', age : 24},
    {id : 5, name : 'Rahim', age : 26},
];
const totalAge = card.reduce((acc, age) => acc + age.age, 0);
console.log(totalAge); // expected output: 120 