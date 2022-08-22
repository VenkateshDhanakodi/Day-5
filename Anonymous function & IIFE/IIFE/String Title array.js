//Using IIFE : -
const arr = ["venkat","sathya","pattu","kutty"];
let result = [];
let operation = function(inp) {

  for (let i = 0; i <= inp.length - 1; i++){
        result.push(inp[i].toUpperCase());
        debugger;
  };
}(arr);
console.log(result);