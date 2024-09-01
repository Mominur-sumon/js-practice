const items = ['book', 'pen', 'pencil', 'eraser'];
for (const item of items) {
  console.log(item);
} // book pen pencil eraser

const str = 'hello';
for (const letter of str){
    console.log(letter);
}

const users = [
    {name: 'John', age: 34},
    {name: 'Doe', age: 23},
    {name: 'Smith', age: 45}
];
for (const user of users){
    console.log(user.name);
    console.log(user.age);
}
console.log('===============================');
// loop over map
const map = new Map();
map.set('name', 'John');
map.set('age', 34);
for (const [key, value] of map){
    console.log(key, value);
}