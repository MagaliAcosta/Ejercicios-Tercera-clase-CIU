//MANIPULANDO CSS
var $div = document.querySelector("div");

//$div.style.background = "violet";
//$div.style.height = "100px";
//$div.style.width = "100px";

$div.classList.add("square");

console.log($div.classList.remove("square"));

function chequear() {
    setInterval($div.classList.toggle("square"), 1000);
}

//SHUFFLE!
var source = document.querySelector("#source");
var destination = document.querySelector("#destination");

destination.textContent = source.textContent;

var swap1 = document.querySelector("#swap_1").textContent

document.querySelector("#swap_1").textContent = document.querySelector("#swap_2").textContent
document.querySelector("#swap_2").textContent = swap1
