function Init(){
  var number1 = Math.floor((Math.random()*6))+1;
  var number2 = Math.floor((Math.random()*6))+1;
  var diceOnepathImage = "images/dice"+ number1 + ".png";
  var diceTwopathImage = "images/dice"+ number2 + ".png";
  document.getElementById("dice1").src = diceOnepathImage;
  document.getElementById("dice2").src = diceTwopathImage;
}

function DiceRoll(){
  var number1 = Math.floor((Math.random()*6))+1;
  var number2 = Math.floor((Math.random()*6))+1;

  var diceOnepathImage = "images/dice"+ number1 + ".png";
  var diceTwopathImage = "images/dice"+ number2 + ".png";

  if(number1>number2){
    document.querySelector("h1").innerText="Player 1 Won";
  }
  else if(number1<number2){
      document.querySelector("h1").innerText="Player 2 Won";
  }
  else{
      document.querySelector("h1").innerText="Draw";
  }

  document.getElementById("dice1").src = diceOnepathImage;
  document.getElementById("dice2").src = diceTwopathImage;


}
