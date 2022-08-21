//two method apply one is concatination and other is array;
var randomNumber1=Math.floor(Math.random() *6)+1;//for concatination 1-6;
var randomNumber2=Math.floor(Math.random() *6);
var image="dice"+randomNumber1+".png";
var images="images/"+image;
var arr=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
document.querySelector(".container .dice .img1").setAttribute("src",images);

document.querySelector(".container .dice .img2").setAttribute("src",arr[randomNumber2]);
//randomNumber1 is increase by 1 in above so here adjust by -1;
if((randomNumber1-1)>randomNumber2){
    document.querySelector("h1").innerHTML="<em>Player1 wins!</em>";
}
else if((randomNumber1-1)<randomNumber2){
    document.querySelector("h1").innerHTML="<em>Player2 wins!</em>";
}
else{
    document.querySelector("h1").innerHTML="<em>Draw</em>";
}