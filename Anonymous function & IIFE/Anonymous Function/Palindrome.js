//Using Anonymous function :-
const pal = [];
const input_array = ["madam","sir","student","rotator"];

let Anonymous = function(word){
    word.map(reverseString);
    console.log(pal);
}
Anonymous(input_array);

function reverseString(str) {
    let splitString = str.split("");
 
    let reverseArray = splitString.reverse(); 
 
    let joinArray = reverseArray.join(""); 
    
    if(str == joinArray){

pal.push(str);
    }
}