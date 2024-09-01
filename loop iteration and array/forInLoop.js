const coloroObject = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff'
};
// for in loop

for(const color in coloroObject) {
    console.log(color, coloroObject[color]);
}

const colorArr =[ 'red', 'green', 'blue'];
for(const color in colorArr) {
    console.log(color, colorArr[color]); // 0 red 1 green 2 blue
}


