var randomNumber1 = Math.floor(Math.random() * 6)+1; //1-6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice2.png
var randomImageSource = "images/" + randomDiceImage; //images/dice1.png ...

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6)+1; //1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images/dice1.png ...

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
