let arr = ["venkat", "kutty", "sathya",5,
		"I_am", "I_want", "sathya",5,7];

function Dup(arr) {
	return arr.filter((item, index) =>
        arr.indexOf(item) === index);
	}
console.log(Dup(arr));
