var magicDiv = document.querySelector("#magic")
var funcionMagic = function(){
    this.classList.add("oculto")
}

magicDiv.addEventListener("mousemove", funcionMagic)