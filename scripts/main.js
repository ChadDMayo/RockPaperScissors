//Randomly returns either Rock, Paper, or Scissors
function computerPlay(){
  let temp = Math.ceil(Math.random()*3);
  console.log(temp);
  switch (temp) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3: 
      return "scissors";
      break;
    default:
      return "invalid";
  }
}

//Prompts the player to select a choice and then reselect if the choice is not valid
function playerPlay(){
  let play = prompt("Please select rock, paper, or scissors.", "no choice entered");
  if (play.toLowerCase() === "rock" || play.toLowerCase() === "paper" || play.toLowerCase() === "scissors"){
    console.log(play.toLowerCase());
    return play.toLowerCase();
  }else{
    return playerPlay();
  }
}

//Plays a single round of RPS and returns a string declaring the winner
function playRound(playerSelection, computerSelection){
  result = "";
  switch (playerSelection){
    case "rock":
      switch (computerSelection){
        case "rock":
          result = "It's a draw! Both players selected rock.";
          break;
        case "paper":
          result = "You lose! Paper beats rock.";
          break;
        case "scissors":
          result = "You win! Rock beats scissors.";
          break;
      }
      break;
    case "paper":
      switch (computerSelection){
        case "rock":
          result = "You win! Paper beats rock.";
          break;
        case "paper":
          result = "It's a draw! Both players selected paper.";
          break;
        case "scissors":
          result = "You lose! Scissors beats paper.";
          break;
      }
      break;
    case "scissors":
      switch (computerSelection){
        case "rock":
          result = "You lose! Rock beats scissors.";
          break;
        case "paper":
          result = "You win! Scissors beats paper.";
          break;
        case "scissors":
          result = "It's a draw! Both players selected scissors.";        
          break;
      }
      break;
  }
  console.log(result);
  return result;
}

//Plays a best of five game of RPS, keeps score, and declares if the player won or lost
function newGame(){
  let scorePlayer = 0;
  let scoreComputer = 0;
  let playerChoice = "";
  let computerChoice = "";
  let roundResult = "";

  while (scorePlayer < 3 && scoreComputer < 3){
    playerChoice = playerPlay();
    computerChoice = computerPlay();
    roundResult = playRound(playerChoice, computerChoice);

    if (roundResult.search("You win!") != -1){
      scorePlayer++;
    }else if(roundResult.search("You lose!") != -1){
      scoreComputer++;
    }
  }

  if (scorePlayer > scoreComputer){
    console.log("Congratulations, you win the game!");
    return "Congratulations, you win the game!";
  }else{
    console.log("Sorry, you lose the game.");
    return "Sorry, you lose the game.";
  }
}