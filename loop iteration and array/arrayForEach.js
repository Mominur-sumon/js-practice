const socials = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn'];

socials.forEach((social, index) => {
    console.log(`${index + 1}. ${social}`);
}); // 1. Facebook 2. Twitter 3. Instagram 4. LinkedIn

// forEach() method is used to execute a provided function once for each array element.
// The forEach() method does not return anything.
// The forEach() method does not change the original array.
// The forEach() method is not suitable for use with break or continue statements.
// The forEach() method is not suitable for use with return statements.
// The forEach() method does not change the original array.


function logSocial(social){
    console.log(social);
}
socials.forEach(logSocial); // Facebook Twitter Instagram LinkedIn

const socialObj = [
    {name: 'Facebook', followers: 1000},
    {name: 'Twitter', followers: 2000},
    {name: 'Instagram', followers: 3000},
    {name: 'LinkedIn', followers: 4000}
];
socialObj.forEach((social, index) => {
    console.log(`${index + 1}. ${social.name} - ${social.followers} followers`);
}); // 1. Facebook - 1000 followers 2. Twitter - 2000 followers 3. Instagram - 3000 followers 4. LinkedIn - 4000 followers