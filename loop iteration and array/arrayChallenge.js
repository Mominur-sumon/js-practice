const people = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        phone: '123-456-7890',
        age: 34

    },
    {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@gmail.com',
        phone: '123-456-7890',
        age: 45
    },
    {
        firstName: 'James',
        lastName: 'Brown',
        email: 'james@gmail.com',
        phone: '123-456-7890',
        age: 23
    },
    {
        firstName: 'Jim',
        lastName: 'White',
        email: 'jim@gmail.com',
        phone: '123-456-7890',
        age: 23
    }
]
const peopleAgeLess25 = people
    .filter((person) => person.age < 25)
    .map((person) => ({
        fullName: `${person.firstName} ${person.lastName}`,
        email: person.email
    }));
console.log(peopleAgeLess25);

// challenge 2

const numbers = [2, -20, 50, 20, -12, -9, 7];
const positiveSum = numbers
    .filter((numbers) => numbers > 0)
    .reduce((acc, current) => acc + current, 0);


console.log(positiveSum); // expected output: 79

// challenge 3 first letter capitalization

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const cWords = words.map((word) =>
    word[0].toUpperCase() + word.slice(1)
);
console.log(cWords);
