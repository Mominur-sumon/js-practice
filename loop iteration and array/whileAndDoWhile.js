let i = 0;
while (i <= 20) {
    console.log("Number ", i);
    i++;
}

//Loop over an array
const names = ['Mominur', 'Sumon', 'Rahman', 'Sakib', 'Rahim'];
let j = 0;
const len = names.length;
while (j < len) {
    console.log(names[j]);
    j++;
}

//nested while loop
let k = 0;
while (k < 3) {
    let l = 0;
    while (l < 3) {
        console.log("k = ", k, " l = ", l);
        l++;
    }
    k++;
}

//do while loop executes the code block once before checking the condition and then it will repeat the loop as long as the condition is true.

let m = 0;
do {
    console.log("Number ", m);
    m++;
} while (m <= 20);

