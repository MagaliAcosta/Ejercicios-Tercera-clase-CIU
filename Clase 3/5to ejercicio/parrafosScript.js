var parrafos = document.querySelectorAll("p");
var funcionClick = function () {
    this.classList.toggle("resaltado")
}

for (var i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener("click", funcionClick)
}