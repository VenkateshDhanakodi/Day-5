const arr = ["venkat","sathya","pattu","kutty"];
let result = [];
let convert = ((inp) => {

  for (let i = 0; i <= inp.length - 1; i++){
        result.push(inp[i].toUpperCase());
        debugger;
  };
});

let caps = convert(arr);
console.log(result);