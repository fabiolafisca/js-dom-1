"use strict"
console.clear()
const lampadinaSpenta = document.getElementById("spenta");
const buttoneAccendere = document.getElementById("accendi");
function accensione () {
    if (
        lampadinaSpenta.src.includes("white_lamp.png") && 
        (document.getElementById("accendi").innerHTML = "Accendi")
    ) {
        lampadinaSpenta.src= "./img/yellow_lamp.png";
        document.getElementById("accendi").innerHTML = "Spegni";
    } else if (
        lampadinaSpenta.src.includes("yellow_lamp.png") && 
        (document.getElementById("accendi").innerHTML = "Spegni")

    ) {
        lampadinaSpenta.src = "./img/white_lamp.png";
        document.getElementById("accendi").innerHTML = "Accendi";
    }
}

buttoneAccendere.addEventListener("click", accensione);
