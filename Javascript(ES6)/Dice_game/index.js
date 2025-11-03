var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;



var dice = "images/dice"+randomNumber1+".png";
document.getElementsByClassName("img1")[0].setAttribute("src", dice);

var dice2 = "images/dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src", dice2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "Draw!";
}