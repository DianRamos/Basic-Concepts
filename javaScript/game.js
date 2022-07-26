
var rock ="rock";
var paper = "paper";
var scisor="scisor";


function rpsGame(player,bot) {
   if (
       player=== rock && bot=== scisor ||
       player=== paper && bot=== rock ||
       player=== scisor && bot=== paper) {
    console.log("you win!! you choose " + player+ " and bot choose " + bot);
      
   } 
   else if (
       bot === paper && player === rock ||
       bot === scisor && player === paper ||
       bot === rock && player === scisor
   ) {
    console.log("you lose!! you choose " + player+ " and bot choose " + bot);
     
   }else{
       console.log("try again");
   }
       
}
console.log(rpsGame(rock,paper));



