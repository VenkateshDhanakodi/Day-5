//Median of 2 sorted arrays :-
const arr1 = [4,12,8,16];
const arr2 = [28,24,32,20];

//Sorting 1st array
arr1.sort(function(min,max){
    return min - max;
});
//Sorting 2nd array
arr2.sort(function(min,max){
    return min - max;
});
//Sorting 3rd output array
//I sorted 3 diffenet arrays and concatinated it, since the question is 2 sorted arrays of same size. 
//Otherwise we can sort only one array after concatination which is efficient.
const arr3 = arr1.concat(arr2);
arr3.sort(function(min,max){
    return min - max;
});
//Using Anonymous function
let find_median = function(){
    console.log((arr3[arr3.length/2] + arr3[arr3.length/2 - 1]) /(2));
};
find_median();
