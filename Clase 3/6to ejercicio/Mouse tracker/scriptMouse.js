var gif = document.querySelector("img");

var callback = function (infoEvent) {
    var x = infoEvent.clientX;
    var y = infoEvent.clientY;

    gif.style.top = `${y}px`;
    gif.style.left = `${x}px`;
}

document.body.addEventListener("mousemove", callback)

//document.body.addEventListener("drag", callback)