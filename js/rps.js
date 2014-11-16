/*
hides the red arrows
■ changes the red text to “GO!”
■ resets any additional variables
*/
function newRPS() {
    
}

/*
 returns “rock”, “paper” or “scissors” randomly

 */
function player2RPS() {
    var randomnumber = Math.floor(Math.random() * 3) + 1;
    switch (randomnumber) {
        case 1: 
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

/*
 assuming player1, and player2 are valid RPS options (“rock”, “paper” or
“scissors”), the function returns: 0 for a tie, 1 if player1 won, and 2 if
player2 won
 */
function checkRPS(player1, player2) {
    if (player1 === player2) {
        /* a tie */
        return 0;
    } else if (
        (player1 == "rock" && player2 == "scissors") || 
        (player1 == "paper" && player2 == "rock") || 
        (player1 == "scissors" && player2 == "paper")) {
        /* player1 won */
        return 1;
    } else {
        /* player2 won */
        return 2;
    }
 } 

/*

assuming player1 is a valid RPS option (“rock”, “paper” or “scissors”)
■ marks player2 action by making one of the upper red arrows visible
■ get player2 action using player2RPS()
■ marks player2 action by making one of the lower red arrows visible
■ call checkRPS(player1, player2) to find the game result
■ changes the red text to one of:
● “Player1 won!”
● “Player2 won!”
● “Tie!”
*/
function playRPS(player1) {}