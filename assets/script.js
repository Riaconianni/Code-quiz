// create variables to reference all DOM elements we're working with
var timeLeftEl = document.querySelector("#time-left");
// time-left
var startScreenEl = document.querySelector("#start-screen");
// start game button
var startGameBtnEl = document.querySelector("#start-game-btn");
// start screen
var quizContentEl = document.querySelector("#quiz-content");
// quiz content (event delegation. event listener attach to this)
var postGameEl = document.querySelector("#post-game-screen");
// post-game screen
var userScoreEl = document.querySelector("#user-score");
// user-score
var playAgainBtnEl = document.querySelector("#play-again-btn");
// play again-btn

// create variables for game logic
  var timerIntervalId = 0;
  // timerIntervalId
  var score = 0;
  // score
  // secondsLeft
// create function to start game
startGame();

function startGame() {
  var secondsLeft = 300;
// set seconds left variable to starting time (300 seconds = 5 minutes)
secondsLeft.textContent = timerIntervalId;
// write seconds left to the page

// reset score to 0
}

  // write score to the page (optional)

  // hide start-screen element && post-game-screen
  // show quiz-content element

  // display first question
  displayQuestions(0);

//   // set timer interval to setInterval function that decrements secondsLeft every second
  timerIntervalId = setInterval(function() {
    secondsLeft--;
    if (secondsLeft <= 0) {
      stopGame()
    }
  }, 1000);
// create function to display a question and possible choices
function displayQuestions(questionIndex) {
// check if questionIndex in questions array doesn't exist
  if (!questions[questionIndex]) {
// stop game weve hit the last question
    return stopGame();
  }
};
// initialize question text variable
quizContentEl.textContent = (questions[questionIndex]);
  // get questions[questionIndex]
  quizContentEl.getAttribute(questions[questionIndex]);
  // print question to the page
  quizContentEl.append(questions[questionIndex]);
  // use data attribute to know which index the question is
  quizContentEl.setAttribute("data-index", [questionIndex]);
  // loop through choices and print out choices to the page (make them buttons)
  for (var i = 0; i > questions.length; i++)
// }

// create function to handle user's answering
  // use event delegation to make sure button was clicked
  // read data attribute of what question we answered (index)
  // check to see if choice picked is same as questions correct answer
  // if yes, increase score++
  // if no, subract time from secondsLeft

  // get index of next question (this questions index +1)
  // run displayQuestion(nextQuestionIndex)

// create a function to stop the game (answering all the questions or time has run out)
  // clearInterval() to stop the timer
  // hide quiz-content element
  // show post-game-screen
  // print out user score

// add event listeners
  // start game button (for starting the game)
  startGameBtnEl.addEventListener("click", startGame);
  // quiz content (event delegation) - answering a question in the game
  quizContentEl.addEventListener("click", function(event) {
    event.preventDefault();
  });
  // play again button
playAgainBtnEl.addEventListener("click", playAgain);