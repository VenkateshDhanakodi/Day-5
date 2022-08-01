//Using Anonymous function :-
const arr = [1,2,3,4,5,6,7,8,9,10];
let total = 0;
let sum = (function(operation) {
   
   for(let i = 0; i < arr.length; i++){
         total = operation[i] + total;
   }; 
});
sum(arr);
console.log(total);

//Using Arrow function :-
const Arr = [1,2,3,4,5,6,7,8,9,10];
let Total = 0;
let Sum = ((Operation) => {
   
   for(let i = 0; i < Arr.length; i++){
         Total = Operation[i] + Total;
   }; 
});
Sum(Arr);
console.log(Total);
