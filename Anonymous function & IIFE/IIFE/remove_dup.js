let arr = ["venkat", "kutty", "sathya",5,
		"I_am", "I_want", "sathya",5,7,5,5,7,7,"sathya"];
	
	let Dup = (function(a) {
 		return (a.filter((item, index) =>
          	a.indexOf(item) === index));
	})(arr);
let final = Dup;
console.log(final);