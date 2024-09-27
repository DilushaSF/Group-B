alert("eular.js is loaded");

let a,b;

functionSumOfMultiplies = () => {

    aVal = document.getElementById("a").value;
    bVal = document.getElementById("b").value;

    let sum = 0;
    for(let i = 0; i<1000; i++){
        if(i % aVal == 0 || (i % bVal == 0)){
            sum += i;
        }
    }

    alert("Sum of multiplies of " + aVal + " and " + bVal + " below 1000 : " + sum);
}

functionSumOfMultiplies();