const Arr = ["v","e","n","k","a","t","k","u","t","t","y"];
let k = 5;
let final =[];
let rotated = function(rotate, k){
    console.log(k);
    for(let i = 0; i < k; i++){
        rotate.unshift(rotate.pop());
    };
    return rotate;
}(Arr, k);

console.log(rotated);