const arr = ["v","e","n","k","a","t",1];
let k = 5; 
let arr1 = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }(arr,k);
  
  let post_rotation = arr1;
  console.log(post_rotation);
  