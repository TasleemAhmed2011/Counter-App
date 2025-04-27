let counter = 0;
var btn_increase = document.getElementById("increase");
var btn_decrease = document.getElementById("decrease");
var btn_reset = document.getElementById("reset");
function increase() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgcolor="rgb(" + r + ", " + g + ", " + b + ")";
    document.body.style.backgroundColor = bgcolor;
    document.h1.style.color = bgcolor;
    document.span.style.color = bgcolor;
}



function decrease() {
    counter--;
    document.getElementById("counter").innerHTML = counter;
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgcolor="rgb(" + r + ", " + g + ", " + b + ")";
    document.body.style.backgroundColor = bgcolor;
    document.h1.style.color = bgcolor;
    document.span.style.color = bgcolor;
}
function reset() {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var bgcolor="rgb(" + r + ", " + g + ", " + b + ")";
    document.body.style.backgroundColor = bgcolor;
    document.h1.style.color = bgcolor;
    document.span.style.color = bgcolor;
}
btn_increase.addEventListener("click", increase);
btn_decrease.addEventListener("click", decrease);
btn_reset.addEventListener("click", reset);
