var randomNumber1 = Math.ceil(Math.random()*6);

document.querySelector(".col img.d1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.ceil(Math.random()*6);

document.querySelector(".col img.d2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🇩🇪 Player 1 wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🇩🇪 ";
}