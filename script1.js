// Set up game parameters
const minNumber = 1;
const maxNumber = 20;
let secretNumber;
let attempts = 5;
let score = 0;

// Get DOM elements
const messageElement = document.getElementById('message');
const guessInput = document.getElementById('guessInput');
const attemptsElement = document.getElementById('attempts');
const scoreElement = document.getElementById('score');

// Function to start a new game
function newGame() {
    secretNumber = generateRandomNumber(minNumber, maxNumber);
    attempts = 5;
    updateAttemptsDisplay();
    resetMessage();
}

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to check the user's guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (!isNaN(userGuess) && userGuess >= minNumber && userGuess <= maxNumber) {
        attempts--;

        if (userGuess === secretNumber) {
            handleCorrectGuess();
        } else {
            handleIncorrectGuess();
        }
    } else {
        setMessage('Please enter a valid number between 1 and 20');
    }
}

// Function to handle a correct guess
function handleCorrectGuess() {
    setMessage(`Congratulations! You guessed the correct number ${secretNumber}!`);
    updateScore();
    newGame();
}

// Function to handle an incorrect guess
function handleIncorrectGuess() {
    if (attempts === 0) {
        setMessage(`Sorry, you're out of attempts. The correct number was ${secretNumber}.`);
        newGame();
    } else {
        setMessage(`Incorrect guess. ${attempts} attempt(s) left.`);
    }
    updateAttemptsDisplay();
}

// Function to update the attempts display
function updateAttemptsDisplay() {
    attemptsElement.textContent = attempts;
}

// Function to update the score display
function updateScore() {
    score += attempts * 10;
    scoreElement.textContent = score;
}

// Function to set a message in the message element
function setMessage(message) {
    messageElement.textContent = message;
}

// Function to reset the message element
function resetMessage() {
    setMessage('Guess a number between 1 and 20');
}

// Function to start a new game when the "Play Again" button is clicked
function playAgain() {
    newGame();
}

// Start a new game when the page loads
window.onload = newGame;
