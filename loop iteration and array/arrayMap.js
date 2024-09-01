const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers); // expected output: Array [2, 4, 6, 8, 10, 12, 14, 16, 18]

// same with forEach
const doubleNumbers2 = [];
numbers.forEach(number => {
    doubleNumbers2.push(number * 2);
});
console.log(doubleNumbers2); // expected output: Array [2, 4, 6, 8, 10, 12, 14, 16, 18]

const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2003 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// create array of company names
const companyNames = companies.map(company => company.name);
console.log(companyNames); // expected output: Array ["Company One", "Company Two", "Company Three", "Company Four", "Company Five", "Company Six", "Company Seven", "Company Eight", "Company Nine"]

// create array of company names and category

const companyNamesAndCategory = companies.map(company => `${company.name} [${company.category}]`);
console.log(companyNamesAndCategory); // expected output: Array ["Company One [Finance]", "Company Two [Retail]", "Company Three [Auto]", "Company Four [Retail]", "Company Five [Technology]", "Company Six [Finance]", "Company Seven [Auto]", "Company Eight [Technology]", "Company Nine [Retail]"]

// create array of company names and category with object
const companyInfo = companies.map(company => {
    return {
        name : company.name,
        category : company.category,
    } ;
}) ;
console.log(companyInfo); // expected output: Array [{name: 'Company One', category: 'Finance'}, {name: 'Company Two', category: 'Retail'}, {name: 'Company Three', category: 'Auto'}, {name: 'Company Four', category: 'Retail'}, {name: 'Company Five', category: 'Technology'}, {name: 'Company Six', category: 'Finance'}, {name: 'Company Seven', category: 'Auto'}, {name: 'Company Eight', category: 'Technology'}, {name: 'Company Nine', category: 'Retail'}]

// create an array of the length of each company in years

const companyYears = companies.map(company => {
    return {
        name: company.name,
        years: company.end - company.start,
    };
});
console.log(companyYears);


// chain map method 
const squareDouble = numbers
.map(number =>Math.sqrt(number))
.map(sqrt => sqrt * 2);
console.log(squareDouble); 

const squareDouble2 = numbers
 .map(function (number){
     return Math.sqrt(number);
 })
    .map(function (sqrt){
        return sqrt * 2;
    });

console.log(squareDouble2);    
