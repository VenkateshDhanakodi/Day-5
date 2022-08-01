//Using IIFE :-
const numbers = [];

let result =  function(min,max){

    for (let i = min; i <= max; i++) {
        let flag = 0;
    
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        if (i > 1 && flag == 0) {
            numbers.push(i);
            }

    }
console.log(numbers);
}(0,100);

// //Using Anonymous function:-
// const numbers = [];

// let result =  function(min,max){

//     for (let i = min; i <= max; i++) {
//         let flag = 0;
    
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 flag = 1;
//                 break;
//             }
//         }
    
//         if (i > 1 && flag == 0) {
//             numbers.push(i);
//             }

//     }
// console.log(numbers);
// };
// result(0,100);