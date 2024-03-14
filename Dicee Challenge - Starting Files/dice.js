const player1 = document.querySelector('#player1');
const h1 = document.querySelector('h1');
const player2 = document.querySelector('#player2');
const  dice1= document.querySelector('#img1');
const dice2 = document.querySelector('#img2');
const button = document.querySelector("button")
player1.innerHTML= window.prompt("Player 1 Name: ")
player2.innerHTML= window.prompt("Player 2 Name: ")

const images = {
     1:"./images/dice1.png",
    2:"./images/dice2.png",
  3:"./images/dice3.png",
   4:"./images/dice4.png",
     5:"./images/dice5.png",
     6:"./images/dice6.png",
}


button.addEventListener('click', ()=>{
    let random1 = Math.ceil(Math.random()*6);
    let random2 = Math.ceil(Math.random()*6)
    dice1.setAttribute('src', images[random1])
    dice2.setAttribute('src', images[random2])
if(random1>random2){
h1.innerHTML=player1.innerHTML+" " + "won"
}else if(random1===random2){
h1.innerHTML= "Draw"
}else{
h1.innerHTML=player2.innerHTML+ " "+ "won"

}
})
