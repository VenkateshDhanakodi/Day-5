const numbers = [];

let arrow = (min,max)=>{

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
}
arrow(0,100);
console.log(numbers);