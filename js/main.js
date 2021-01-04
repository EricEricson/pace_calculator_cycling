// CALCULATION
$(document).ready(function () {
    $("#distanceR").keyup(function () {
        calculate();

    });
    $("#kmhR").change(function () {
        calculate();
    });
});

function calculate() {
    var distance = Number(document.getElementById('distanceR').value);
    var speed = Number(document.getElementById('kmhR').value);

    if (distance > 0 && speed > 0) {
        //*when distance + speed
        resulZeit = (distance * 60) / speed;
        resultHundred = (5 * 60) / speed;

        document.getElementById('shoursR').innerHTML = Math.floor(resulZeit / 60);
        document.getElementById('sminR').innerHTML = Math.floor(resulZeit % 60);
        document.getElementById('ssecR').innerHTML = Math.round(Math.floor((resulZeit % 1) * 100) / 100 * 60);

        document.getElementById('distanceR').style.border = "0px";

    } else {
        document.getElementById('kmhR').value = 30;
        document.getElementById('distanceR').style.border = "3px solid rgba(255, 0, 0, 0.5)";
    }
}

// DARKMODE
function addDarkmodeWidget() {
    new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);


// SLIDER
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
    const range = wrap.querySelector(".range");
    const bubble = wrap.querySelector(".bubble");

    range.addEventListener("input", () => {
        setBubble(range, bubble);
    });
    setBubble(range, bubble);
});

function setBubble(range, bubble) {
    const val = range.value;
    const min = range.min ? range.min : 0;
    const max = range.max ? range.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    bubble.innerHTML = val;

    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${6 - newVal * 0.15}px))`;
}