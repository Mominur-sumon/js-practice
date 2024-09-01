const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words);
const result = words.filter(word => word.length > 6);
console.log(result); // expected output: Array ["exuberant", "destruction", "present"]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // expected output: Array [2, 4, 6, 8]

const students = [
    { name: 'John', age: 17 },
    { name: 'Jane', age: 19 },
    { name: 'Jim', age: 15 },
    { name: 'Jill', age: 21 },
    ];
console.log(students);
const adultStudents = students.filter(student => student.age >= 18);
console.log(adultStudents); // expected output: Array [{ name: 'Jane', age: 19 }, { name: 'Jill', age: 21 }]

//same with forEach
const adultStudents2 = [];
students.forEach(student => {
    if(student.age >= 18){
        adultStudents2.push(student);
    }
});
console.log(adultStudents2); // expected output: Array [{ name: 'Jane', age: 19 }, { name: 'Jill', age: 21 }]

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers2);
const oddNumbers = numbers2.filter(number => number % 2 !== 0);
console.log(oddNumbers); // expected output: Array [1, 3, 5, 7, 9]
 
const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
    ];
console.log(companies);
// return retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies); // expected output: Array [{name: 'Company Two', category: 'Retail', start: 1992, end: 2008}, {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}, {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}]

//get comapnies that started in or after and ended in or before 2000
const oldCompanies = companies.filter(company => company.start <= 2000 && company.end <= 2000);
console.log(oldCompanies); // expected output: Array [{name: 'Company One', category: 'Finance', start: 1981, end: 2003}, {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}, {name: 'Company Six', category: 'Finance', start: 1987, end: 2010}, {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996}, {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}]

//get companies that lasted 10 years or more
const lastedtenYears = companies.filter(company => company.end - company.start >= 10);
console.log(lastedtenYears); // expected output: Array [{name: 'Company One', category: 'Finance', start: 1981, end: 2003}, {name: 'Company Two', category: 'Retail', start: 1992, end: 2008}, {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}, {name: 'Company Six', category: 'Finance', start: 1987, end: 2010}, {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016}]