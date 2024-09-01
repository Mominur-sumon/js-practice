function getCelcius(farenheit){
    return (farenheit - 32) * 5/9;
}
console.log("The Temparature in Celcius is " ,getCelcius(98.6),"\xB0C");

// with arrow function

const getCelcius1 = (farenheit) => (farenheit - 32) * 5/9;
console.log("The Temparature in celcius is ",getCelcius1(98.6), "\xB0C"); 

//Challenge 2

const minMax = (...numbers) => {
    min = Math.min(...numbers);
    max = Math.max(...numbers);
    return `{Min: ${min}, Max: ${max}}`;
}
const str = (minMax(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(str);

//Challenge 3 IIFE 
((length, width)=> {
    let area = length * width;
    console.log(`The are of a rectangle with length ${length} and width ${width} is ${area}`);
})(10, 5);
