alert("eular.js is loaded");

functionSumOfMultiplies = () => {
    let sum = 0;
    for(let i = 0; i<1000; i++){
        if(i % 3 == 0 || (i % 5 == 0)){
            sum += i;
        }
    }

    alert("Sum of multiplies of 3 and 5 below 1000 : " + sum);
}

functionSumOfMultiplies();