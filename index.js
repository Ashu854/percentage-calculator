function percent1(){
    let percent = document.getElementById("percent").value;
    let num = document.getElementById("num").value;
    document.getElementById("value")
    .value =(num/100)*percent;
}

function percent2(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("value1")
    .value =(num1*100)/num2 + "%";
}