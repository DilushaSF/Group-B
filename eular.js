alert("eular.js is loaded");

let a,b;

functionSumOfMultiplies = () => {
    let sum = 0;
    for(let i = 0; i<1000; i++){
        if(i % a == 0 || (i % b == 0)){
            sum += i;
        }
    }

    alert("Sum of multiplies of " + a + "and" + b + "below 1000 : " + sum);
}

functionSumOfMultiplies();