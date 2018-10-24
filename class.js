
var hacker1 = 'driverName';
console.log("The driver's name is", hacker1);

var hacker2 = prompt('what is the navigator name');
console.log("The navigator's name is", hacker2);

if (hacker1.length > hacker2.length){  
    console.log('the driver has the lorgest name, it has' + hacker1.length + 'characters');
}
else if (hacker2.length > hacker1.length){
    console.log('yo, navigation got the longest name, it has' + hacker2.length + 'charaters');
}
else  if (hacker1.length === hacker2.length){
    console.log('wow, you both got equally long names,!!');
}


//here i'm gonna practice the characters of the driver's name, separated by a space and in capitals//
 
function sparetedAndCapitals(hacker1){
     return hacker1.split("").join(' ');
}
console.log(sparetedAndCapitals(hacker1));


function reverseName(hacker2){
    return hacker2.split("").reverse().join("");
}
console.log(reverseName(hacker2));
 
if (hacker1 < hacker2){
    console.log("The driver's name goes first");   
}
else if (hacker1 > hacker2){
    console.log('Yo, the navigator goes first definitely');
}
else if (hacker1===hacker2){
    console.log('What?! You both got the same name?');
}