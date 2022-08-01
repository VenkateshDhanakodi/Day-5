//Using Arrow function :-
const arr = [1,2,3,4,5,6,7,8,9,10];
let total = 0;
let sum = ((operation) => {
   
   for(let i = 0; i < arr.length; i++){
         total = operation[i] + total;
   }; 
});
sum(arr);
console.log(total);