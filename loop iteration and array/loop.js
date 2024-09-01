/*
for(initialization; condition; postIteration) {
    // code block
}
*/
//initialization: It is executed only once at the beginning of the loop. It is used to initialize the loop variable.
//condition: It is evaluated at the beginning of each iteration. If it is true, the code block inside the loop is executed. If it is false, the loop is terminated.
//postIteration: It is executed at the end of each iteration. It is used to update the loop variable.
//code block: It contains the code that is executed in each iteration of the loop.
// The initialization, condition, and postIteration are separated by semicolons.
// The code block is enclosed in curly braces.
// The code block is executed repeatedly until the condition becomes false.
// The loop variable is updated in each iteration.
// The loop variable is used to control the number of iterations.
// The loop variable is used to access the elements of an array.
// The loop variable is used to access the properties of an object.
// The loop variable is used to generate a sequence of numbers.
// The loop variable is used to generate a sequence of characters.
// The loop variable is used to generate a sequence of dates.
// The loop variable is used to generate a sequence of colors.
// The loop variable is used to generate a sequence of elements.
// The loop variable is used to generate a sequence of strings.
// The loop variable is used to generate a sequence of functions.
//etc

for(let i = 0 ; i <= 10; i++){ // we can use var instead of let but cann't use const
    console.log("Number ",i);

}

// Nested loop
for(let i = 0 ; i < 3; i++){ 
    for(let j = 0; j < 3; j++){
        console.log("i = ",i," j = ",j);
    }
}

for (let i = 0; i <=10 ; i++){
   for(let j = 0; j <= 10; j++){
       console.log(i," * ",j," = ",i*j);
   }
   console.log('=====================');
}

// Loop through an array

const names = ['Mominur','Sumon','Rahman','Sakib','Rahim'];
const len = names.length;
for(let i = 0; i < len; i++){
    if(names[i] === 'Sakib'){
        console.log('Sakib is the best');
    }
    else{
        console.log(names[i]);
    }
}
// break and continue
// break: It is used to terminate the loop.
// continue: It is used to skip the current iteration and continue with the next iteration.

for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
console.log('=======');
for (let i = 0; i < 10; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}