//alert("Here is the function!")
var name = prompt ("Please enter your name")
document.getElementById("name").innerHTML = `${name}`
var antidote = Math.ceil (Math.random() * 9)
var venom = Math.ceil (Math.random() * 9)
const poison = (clickedBox) => {
if(clickedBox === "1") {
    document.getElementById("1").innerHTML = "😰"
} else if(clickedBox ==="2") {
    document.getElementById("2").innerHTML = "😰"
} else if(clickedBox ==="3") {
    document.getElementById("3").innerHTML = "😰"
} else if(clickedBox ==="4") {
    document.getElementById("4").innerHTML = "😰"
} else if(clickedBox ==="5") {
    document.getElementById("5").innerHTML = "😰"
} else if(clickedBox ==="6") {
    document.getElementById("6").innerHTML = "☠"
    alert (`You have Died!`)
} else if(clickedBox ==="7") {
    document.getElementById("7").innerHTML = "💉"
    alert (`You have Survived!`)
} else if(clickedBox ==="8") {
    document.getElementById("8").innerHTML = "😰"
} else if(clickedBox ==="9") {
    document.getElementById("9").innerHTML = "😰"
}
}
const restartbutton = () => {
    console.log("clicked")
    location.reload();
}