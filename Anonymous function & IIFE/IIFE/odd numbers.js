//using IIFE
const arr = [1,2,3,4,5,6,7,8,9,10];
let odd = [];
let operation = function (a) {
   for (let i = 0; i <= a.length; i++){
    if (i % 2 != 0){
        odd.push(i);
    }
   };
}(arr);
console.log(odd);