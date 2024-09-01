const email = "mominur.sumon1@gmail.com";

if(email){
    console.log("Email is valid");
}
console.log(Boolean(email)); // true


//falsey values
// false
// 0
// ""
// null
// undefined
// NaN

//truthy values
// "0"
// " "
// []
// {}
// "false"
// 12
// -12
// "false"
// "null"
// "undefined"
// "NaN"
// "true"
// "0.0"
// "0.1"
// "0.
//function(){}
//etc

const x = undefined;
if(x){
    console.log("x is true");
} else{
    console.log("x is false");
}

