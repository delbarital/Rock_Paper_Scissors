var newGame = true;

/*
hides the red arrows
■ changes the red text to “GO!”
■ resets any additional variables
*/
function newRPS() {
    newGame = true;
    var arrows = document.getElementsByClassName('arrow');
    for(var i = 0; i != arrows.length; ++i){
        arrows[i].style.visibility = "hidden";
    }
    document.getElementById("redText").innerHTML = "GO!";
}

/*
 returns “rock”, “paper” or “scissors” randomly

 */
function player2RPS() {
	var  httpReq = null;
	httpReq = new XMLHttpRequest();
	httpReq.open("GET", "./player2action", false);
	httpReq.send(null);
	return httpReq.responseText;
}

/*
 sends statistics to server (not temper safe but avoids changing player2RPS() requirements)

 */
function sendStats(results) {
	var  httpReq = null;
	httpReq = new XMLHttpRequest();
	httpReq.open("GET", "./results?res=" + results, false);
	httpReq.send(null);
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
function playRPS(player1) {
    if (newGame != true) {
        return;
    }
    newGame = false;
    switch (player1) {
        case "rock":
            document.getElementById("topRock").style.visibility = "visible";
            break;
        case "paper":
            document.getElementById("topPaper").style.visibility = "visible";
            break;
        case "scissors":
            document.getElementById("topScissors").style.visibility = "visible";
            break;
        default:
            console.log("error! Wrong move was passed to playRPS()");
    }
    var player2 = player2RPS();
    switch (player2) {
        case "rock":
            document.getElementById("buttomRock").style.visibility = "visible";
            break;
        case "paper":
            document.getElementById("buttomPaper").style.visibility = "visible";
            break;
        case "scissors":
            document.getElementById("buttomScissors").style.visibility = "visible";
            break;
        default:
            console.log("error! Wrong move was passed to playRPS()");
    }
    
	var result = checkRPS(player1, player2);
	sendStats(result);
    switch (result) {
        case 0:
            document.getElementById("redText").innerHTML = "Tie";
            break;
        case 1:
            document.getElementById("redText").innerHTML = "Player1 won!";
            break;
        case 2:
            document.getElementById("redText").innerHTML = "Player2 won!";
    }
}