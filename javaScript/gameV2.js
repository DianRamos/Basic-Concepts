var s = 'scissors';
var p = 'paper';
var r = 'rock';
var player = "player";
var bot = "bot";
  
function jugar(player, bot) {

        switch (true) {
         case (player === p && bot === r || player === s && bot === p || player === r && bot === s):
            console.log("you win"); 
        break;
                    
        case (player === s && bot === r || player === r && bot === p || player === p && bot === s):
            console.log("bot win"); 
        break;
                    
        default:
            console.log("try again"); 
        }
  
}
console.log(jugar("rock","rock"));
    
  