"use strict";

var pr = prompt("say ur name", 'ahmed');
name = pr; // alert(Date());

list = ['l', 'kira', 'obito', 'minato', 'sassuke', 'naruto'];
var options = '';

for (var i = 0; i < list.length; i++) {
  options += '<option value="' + list[i] + '" />';
  console.log(list[i]);
}

document.getElementById('ani').innerHTML = options;

switch (pr) {
  case '':
    document.getElementById("name").innerText = "user";
    break;

  default:
    document.getElementById("name").innerText = name;
}

function want() {
  var wan = prompt("say wat u want");

  if (wan != '' || wan != null) {
    wan = wan.toUpperCase();
  }

  switch (wan) {
    case '':
      document.getElementById("pic").innerText = "sorry not found";
      console.log(wan);
      break;

    case 'L':
      document.getElementById("pic").innerHTML = '<img src="../images/l.jpg">';
      console.log(wan);
      break;

    case 'KIRA':
      document.getElementById("pic").innerHTML = '<img src="../images/kira.jpg">';
      console.log(wan);
      break;

    case 'OBITO':
      document.getElementById("pic").innerHTML = '<img src="../images/obito.png">';
      console.log(wan);
      break;

    case 'NARUTO':
      document.getElementById("pic").innerHTML = '<img src="../images/naruto.png">';
      document.getElementById("pic").innerHTML += '<img src="../images/naruto_2.png">';
      console.log(wan);
      break;

    case 'MINATU':
      document.getElementById("pic").innerHTML = '<img src="../images/hokage.png">';
      console.log(wan);
      break;

    case 'SASSUKE':
      document.getElementById("pic").innerHTML = '<img src="../images/sassuke.png">';
      console.log(wan);
      break;

    case 'ITACHI':
      document.getElementById("pic").innerHTML = '<img src="../images/itachi.png">';
      console.log(wan);
      break;

    default:
      document.getElementById("pic").innerText = "sorry not found";
      console.log(wan);
      break;
  }
}

function want2() {
  var an = document.getElementById("anime").value;

  if (an != '' || an != null) {
    an = an.toUpperCase();
  }

  console.log(an);

  switch (an) {
    case '':
      document.getElementById("pic").innerText = "sorry not found";
      console.log(an);
      break;

    case 'L':
      document.getElementById("pic").innerHTML = '<img src="../images/l.jpg">';
      console.log(an);
      break;

    case 'KIRA':
      document.getElementById("pic").innerHTML = '<img src="../images/kira.jpg">';
      console.log(an);
      break;

    case 'OBITO':
      document.getElementById("pic").innerHTML = '<img src="../images/obito.png">';
      console.log(an);
      break;

    case 'NARUTO':
      document.getElementById("pic").innerHTML = '<img src="../images/naruto.png">';
      document.getElementById("pic").innerHTML += '<img src="../images/naruto_2.png">';
      console.log(an);
      break;

    case 'MINATU':
      document.getElementById("pic").innerHTML = '<img src="../images/hokage.png">';
      console.log(an);
      break;

    case 'SASSUKE':
      document.getElementById("pic").innerHTML = '<img src="../images/sassuke.png">';
      console.log(an);
      break;

    case 'ITACHI':
      document.getElementById("pic").innerHTML = '<img src="../images/itachi.png">';
      console.log(an);
      break;

    default:
      document.getElementById("pic").innerText = "sorry not found";
      console.log(an);
      break;
  }
}