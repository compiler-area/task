var x, y, p;
var ones = new Array('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
// var tens = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');

function plus() {
    x = Number(document.getElementById("f").value);
    y = Number(document.getElementById("s").value);
    if (x == 0 || y == 0) {
        document.getElementById("all").innerText = 'type number please';
    } else if (isNaN(x) || isNaN(y)) {
        document.getElementById("all").innerText = 'sorry not a number';
        alert("focus on what you write");
    } else {
        document.getElementById("all").innerText = x + y;
    }
}

function prom() {
    p = prompt("say some thing");
    document.getElementById("wh").innerText = p;
}

function makarr(ind) {
    var users = new Array();

    for (let index = 0; index < ind; index++) {
        users[index] = prompt('type element number ' + (index + 1));
    }

    for (let index = 0; index < users.length; index++) {
        document.getElementById("user").innerHTML += '<div> ' + ones[index + 1] + ' name is :' + users[index] + ' </div>'
    }

    // users.forEach(function (entry) {
    //     console.log(entry);
    //     document.getElementById("user").innerHTML += '<div> first name is :' + entry + ' </div>'
    // });
}