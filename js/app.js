var disp = document.getElementById("display");

function num(n) {
  disp.innerHTML += n;
}

document.getElementById("1").addEventListener("click", function() {
  num(1);
});
document.getElementById("2").addEventListener("click", function() {
  num(2);
});
document.getElementById("3").addEventListener("click", function() {
  num(3);
});
document.getElementById("4").addEventListener("click", function() {
  num(4);
});
document.getElementById("5").addEventListener("click", function() {
  num(5);
});
document.getElementById("6").addEventListener("click", function() {
  num(6);
});
document.getElementById("7").addEventListener("click", function() {
  num(7);
});
document.getElementById("8").addEventListener("click", function() {
  num(8);
});
document.getElementById("9").addEventListener("click", function() {
  num(9);
});
document.getElementById("zero").addEventListener("click", function() {
  num(0);
});
document.getElementById("dec").addEventListener("click", function() {
  num(".");
});
document.getElementById("add").addEventListener("click", function() {
  num("+");
});
document.getElementById("sub").addEventListener("click", function() {
  num("-");
});
document.getElementById("mult").addEventListener("click", function() {
  num("*");
});
document.getElementById("div").addEventListener("click", function() {
  num("/");
});
document.getElementById("perc").addEventListener("click", function() {
  num("%");
});

function ans() {
  var res = eval(disp.innerHTML);
  disp.innerHTML = res;
}

document.getElementById("ans").addEventListener("click", function() {
  ans();
});

function clear() {
  disp.innerHTML = "";
}

document.getElementById("ac").addEventListener("click", function() {
  clear();
});
