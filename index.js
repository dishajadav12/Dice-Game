
var randomNumber= Math.floor(Math.random() *6) +1;

var randomedice= "images/dice" + randomNumber + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomedice);

var randomNumber2= Math.floor(Math.random() *6) +1;
var randomedice2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomedice2);


if(randomNumber > randomNumber2){ 
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";

}
else{
    document.querySelector("h1").innerHTML="Draw!!!"

}

