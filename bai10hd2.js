
let bulb = document.getElementById("bulb");
let button = document.getElementById("toggle-btn");

let isOn = false;

button.addEventListener("click", function() {

    if (isOn === false) {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        button.innerText = "Tắt đèn";
        isOn = true;
    } 
    else {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        button.innerText = "Bật đèn";
        isOn = false;
    }

});
