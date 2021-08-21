let green = document.getElementById('green');
let cards = document.getElementsByClassName('cards');
function cardEnter(x){
  for(var i=0; i< cards.length;i++){
    cards[i].style.width = "50px";
 }
  console.log(cards);
  x.style.width= "400px"
  
}