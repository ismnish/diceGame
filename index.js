var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage1="dice" + randomNumber1 + ".png";
var randomImageSource1="images/"+randomDiceImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1); 

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice" + randomNumber2 + ".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

var h1=document.querySelector("h1");
if(randomNumber1>randomNumber2)
h1.innerHTML="💖Player 1 Wins";
//   h1.textContent="💖Player 1 Wins";
else if(randomNumber1<randomNumber2)
h1.innerHTML="player 2 Wins💖";
//   h1.textContent="player 2 Wins💖";
else 
  h1.innerHTML="Draw!";
  function refreshPage(){
    window.location.reload();
} 