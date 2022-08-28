
var img = Array.from(document.querySelectorAll(" .item img"))
var boxContainer = document.getElementById("boxContainer")
var innerBox = document.getElementById("innerBox")
var close = document.getElementById("close")
var next = document.getElementById("next")
var prev = document.getElementById("prev")
var curentIndex = 0;

for (var i = 0; i < img.length; i++) {
    img[i].addEventListener("click", function (event) {
        boxContainer.style.display = "flex";
        curentIndex = img.indexOf(event.target)
        var imgSrc = event.target.getAttribute("src")
        innerBox.style.backgroundImage = `url(${imgSrc})`
    })
}
close.addEventListener("click", closeElement)
function closeElement() {
    boxContainer.style.display = "none"
}
next.addEventListener("click", nextElement)
prev.addEventListener("click", prevElement)
function nextElement() {
    curentIndex++;
    if (curentIndex == img.length) {
        curentIndex = 0;
    }
    var imgSrc = img[curentIndex].getAttribute("src")
    innerBox.style.backgroundImage = `url(${imgSrc})`
}
function prevElement() {
    curentIndex--;
    if (curentIndex < 0) {
        curentIndex = img.length - 1;
    }
    var imgSrc = img[curentIndex].getAttribute("src")
    innerBox.style.backgroundImage = `url(${imgSrc})`
}

document.addEventListener("keyup", function (event) {
    console.log(event.code)
    if (event.code == "ArrowRight") {
        nextElement()
    }
    else if (event.code == "ArrowLeft") {
        prevElement()
    }
    else if (event.code=="Escape"){
        closeElement()
    }
})

document.addEventListener("click",function(event){
    if (event.target.getAttribute("id")=="boxContainer") {
        closeElement()
    }
})

