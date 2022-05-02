var boton = document.querySelector("button");
var seEjecutaEnEvento = function () {
    document.body.insertAdjacentHTML("beforeend", "<p> BEEP </p>")
    document.body.classList.toggle("color")
}

boton.addEventListener("click", seEjecutaEnEvento);