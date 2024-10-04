alert("eular.js is loaded");

functionSumOfMultiplies = () => {

    aVal = document.getElementById("a").value;
    bVal = document.getElementById("b").value;
    count = document.getElementById("n").value;

    let sum = 0;
    for(let i = 0; i<1000; i++){
        if(i % aVal == 0 || (i % bVal == 0)){
            sum += i;
        }
    }

    alert("Sum of multiplies of " + aVal + " and " + bVal + " below " + count + " : " + sum);
}

functionSumOfMultiplies();

hideResult =() => {
    document.getElementById("lbl1").style.visibilty = "hidden";
}

showResult =() => {
    document.getElementById("lbl1").style.visibilty = "";
}