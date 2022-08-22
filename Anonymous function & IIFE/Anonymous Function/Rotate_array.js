// const arr = ["v","e","n","k","a","t","k","u","t","t","y"];
// let k = 5; 
// let arr1 = function(nums, k) {

//     for (let i = 0; i < k; i++) {
//         nums.unshift(nums.pop());
//     }
  
//     return nums;
//   }(arr,k);
  
//   let post_rotation = arr1;
//   console.log(post_rotation);
  

const Arr = ["v","e","n","k","a","t","k","u","t","t","y"];
let k = 5;
let final =[];
let rotated = function (rotate, k){
    for(let i = 0; i < k; i++){
        rotate.unshift(rotate.pop());
    };
    return rotate;
}
console.log(rotated(Arr, k));