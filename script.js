let counter = 0;
var btn_increase = document.getElementById("increase");
var btn_decrease = document.getElementById("decrease");
var btn_reset = document.getElementById("reset");

function setBackgroundAndTextColor(r, g, b) {
    var bgcolor = "rgb(" + r + ", " + g + ", " + b + ")";
    document.body.style.backgroundColor = bgcolor;

    // Calculate luminance
    var luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    // Set text color based on luminance
    var textColor = luminance < 128 ? "white" : "black";
    document.querySelector("h1").style.color = textColor;
    document.querySelectorAll("button").forEach(button => {
        button.style.color = textColor;
    });
    document.getElementById("counter").style.color = textColor; // Ensure counter is visible
}

function increase() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    setBackgroundAndTextColor(r, g, b);
}

function decrease() {
    counter--;
    document.getElementById("counter").innerHTML = counter;
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    setBackgroundAndTextColor(r, g, b);
}

function reset() {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    setBackgroundAndTextColor(r, g, b);
}

btn_increase.addEventListener("click", increase);
btn_decrease.addEventListener("click", decrease);
btn_reset.addEventListener("click", reset);
