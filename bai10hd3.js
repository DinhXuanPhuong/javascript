
let input = document.getElementById("name-input");

let result = document.getElementById("result");

input.addEventListener("input", function() {

    result.innerText = input.value;

});
