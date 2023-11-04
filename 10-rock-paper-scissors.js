
let scores = JSON.parse(localStorage.getItem('scores')) || {
  wins: 0,
  losses:0,
  ties: 0
};

updateScoreElement();

/*
if (scores === null) {
  scores = {
    wins: 0,
    losses:0,
    ties: 0
  }
} 
*/ 

function playGame(playerMove) {

  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {

    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.'
    } else if (computerMove === 'scissors') {
      result = 'You win.'
    }

  } else if (playerMove === 'paper') {

    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.'
    } else if (computerMove === 'scissors') {
      result = 'You lose.'
    }

  } else if (playerMove === 'scissors') {

    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.'
    } else if (computerMove === 'scissors') {
      result = 'Tie.'
    }         

  }

  if (result === 'You win.') {
    scores.wins += 1;
  } else if (result === 'You lose.') {
    scores.losses += 1;
  } else if (result === 'Tie.') {
    scores.ties += 1;
  } 

  localStorage.setItem('scores', JSON.stringify(scores));

  updateScoreElement();
  document.querySelector('.js-result')
    .innerHTML = `${result}`;

  document.querySelector('.js-moves')
    .innerHTML = `You picked
      <img src="imoji/${playerMove}-emoji.png" alt="rock" class="move-icon">

      <img src="imoji/${computerMove}-emoji.png" alt="scissors" class="move-icon"> 
      Computer picked`;
  
}

function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
  }
            
function pickComputerMove() {

  const randomNumber = Math.random();

  let computerMove = '';
  
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';

  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';

  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
    
  }

  return computerMove;
  
}