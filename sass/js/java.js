function plus() {
    x = Number(document.getElementById("f").value);
    y = Number(document.getElementById("s").value);
    if(x == 0 || y == 0 ){
        document.getElementById("all").innerText = 'type number please';
    } else if (isNaN(x) || isNaN(y)){
        document.getElementById("all").innerText = 'sorry not a number';
    }else {
        document.getElementById("all").innerText = x + y;   
    }
}