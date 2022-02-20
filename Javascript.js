function computerPlay(){
    temp = Math.floor(Math.random() * 3);
    if(temp == 0){
        return "rock";
    }
    else if(temp == 1){
        return "paper";
    }
    return "scissors";
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Its a tie! " + playerSelection + " ties " + computerSelection + "!";
    }
    else if(playerSelection == "rock" || computerSelection == "rock"){
        if(playerSelection == "rock"){
            if(computerSelection == "paper"){
                return "You Lose! Paper beats Rock";
            }
            if(computerSelection == "scissors"){
                return "You Win! Rock beats Scissors";
            }
        }
        if(computerSelection == "rock"){
            if(playerSelection == "paper"){
                return "You Win! Paper beats Rock";
            }
            if(playerSelection == "scissors"){
                return "You Lose! Rock beats Scissors";
            }
        }
    }
    else if(playerSelection == "paper" || computerSelection == "paper"){
        if(playerSelection == "paper"){
            if(computerSelection == "scissors"){
                return "You Lose! Scissors beats Paper";
            }
        }
        if(computerSelection == "paper"){
            if(playerSelection == "scissors"){
                return "You Win! Scissors beats Paper";
            }
        }
    }
    else{
        return "How did you get here?";
    }
}

function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = window.prompt("What will you choose? : ");
        let temp = 1;
        if(playerSelection != "rock"){
            if(playerSelection != "paper"){
                if(playerSelection != "scissors"){
                    temp = 0;
                }
            }
        }
        if (temp == 0){
            while(temp == 0){
                playerSelection = window.prompt("Thats not an option. What will you choose? : ");
                if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
                    temp = 1;
                }
            }
        }
        console.log("The player chose: " + playerSelection);
        let computerSelection = computerPlay();
        console.log("The computer chose: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("The score is: " + playerWin + "-" + compWin + "\n");   
    }
}

const buttons = document.querySelectorAll('button');
const answer = document.querySelector('.answer-box');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        answer.textContent = playRound(button.id, computerPlay());
    });
});