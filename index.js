

var random1=1+Math.floor(6*Math.random());
var random2=1+Math.floor(6*Math.random());
var word1="images/dice"+random1+".png";
var word2="images/dice"+random2+".png";
document.querySelector(".img1").setAttribute("src",word1);
document.querySelector(".img2").setAttribute("src",word2);


if(random1>random2){
    document.querySelector("h1").textContent="🚩Player1 wins";
}
else if(random2>random1){
    document.querySelector("h1").textContent="Player2 wins🚩";
}
else{
    document.querySelector("h1").textContent="Draw!";
}




