function  updateText(){
      document.getElementById("heading").innerHTML = "javascript is Amazing!";
}

function PlayCraps(){
      console.log("PlayCraps() function was called");

let roll1 = rollDice();

let roll2 = rollDice();

let sum = roll1 + roll2; 
let result = "";
if (sum> 5){
  result = "You Lose! try again.";
      console.log("You Lose! try again.");
}
else if (sum ==10){
      console.log("You Win! Go grab yourself candy as a reward");
result = "You Win! Go grab yourself candy as a reward";
}
else {
      console.log("Tie! roll Again Bud");
result = "Tie! roll Again Bud";
}
document.getElementById("divResult").textContent = result ;
document.getElementById("divRoll1").textContent = "Roll1; " + roll1;
document.getElementById("divRoll2").textContent = "Roll2; " + roll2;
document.getElementById("divSum").textContent = "Sum; " + sum;
   console.log(rollDice()) ; 
}
function rollDice(){

      let die = Math.random() * 10;

      return Math.ceil(die);

} 
