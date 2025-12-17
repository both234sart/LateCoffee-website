const display = document.getElementById("display");
const hoverTargets = document.querySelector(".menu-btn");

function openMenu() {
    document.getElementById("sideMenu").classList.add("open");
    document.getElementById("overlay").classList.add("show");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("open");
    document.getElementById("overlay").classList.remove("show");
}



function appendDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Error";
    }
}
