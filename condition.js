const d = new Date(); 
console.log(d);
const hours = d.getHours(); 
if(hours < 12) {
    console.log('Good morning');
} else if(hours < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good evening');
} 