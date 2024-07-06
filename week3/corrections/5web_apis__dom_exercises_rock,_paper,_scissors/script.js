// You can work here or download the template

/**
 * 
 HTML with Tailwind CSS:

A card at the top to display the score (User vs. Computer).
A card with three buttons for selecting Rock, Paper, or Scissors.
An empty card to display the result of each round.
A button to play the round.
JavaScript:

Listen for a click on the play button.
Check if the user selected something; if not, alert the user.
Mark the user selected button in some way.
Randomly select Rock, Paper, or Scissors for the computer.
Compare the user's selection with the computer's selection.
Display the result in the output area.
Update the score and the DOM accordingly.
 */
const userScoreEl = document.querySelector('#user-score');
const computerScoreEl = document.querySelector('#computer-score');
const selectionButtons = document.querySelectorAll('#selection button');
const result = document.querySelector('#result');
const playButton = document.querySelector('#play-button');
let userScore = 0;
let computerScore = 0;
const choices = ['paper', 'rock', 'scissors'];
let userChoice = '';
selectionButtons.forEach(btn => btn.addEventListener('click', e => selectChoice(e.target.id)));
function selectChoice(choice) {
  userChoice = choice;
  selectionButtons.forEach(btn => {
    if (btn.id === choice) {
      btn.classList.add('line-through');
    } else {
      btn.classList.remove('line-through');
    }
  });
}

playButton.addEventListener('click', playRound);
function playRound(e) {
  if (!userChoice) {
    alert('Please select a choice!');
    return;
  }
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const resultStr = `you picked ${userChoice} & computer picked ${computerChoice}`;
  if (userChoice === computerChoice) {
    // tie
    result.textContent = `${resultStr} it's a tie!`;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    // user won!
    result.textContent = `${resultStr} You won!`;
    userScore++;
  } else {
    // computer won
    result.textContent = `${resultStr} computer won!`;
    computerScore++;
  }
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
}
