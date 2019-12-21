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
  var secondsLeft = 0;
  var answer1BtnEl;
  var answer2BtnEl;
  var answer3BtnEl;
  var answer4BtnEl;
// create function to start game
startGame();

function startGame() {
  var secondsLeft = 300;
  // set seconds left variable to starting time (300 seconds = 5 minutes)
timeLeftEl.textContent = secondsLeft;
  // write seconds left to the page
userScoreEl.value = userScoreEl.defaultValue;
  // reset score to 0
  // write score to the page (optional)
  startGameBtnEl.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true) {
    startScreenEl.setAttribute("class", "hide");
      // hide start-screen element && post-game-screen
    quizContentEl.getAttribute("class");
    };

  });
}
   // display first question
   displayQuestions(0);
// set timer interval to setInterval function that decrements secondsLeft every second
  var timerIntervalId = setInterval(function() {
    secondsLeft--;
    if (secondsLeft === 0) {
      clearInterval(timeInterval);
      stopGame()
    }
  }, 1000);

// create function to display a question and possible choices
function displayQuestions(questionIndex) {
  if (questionIndex === questions.length) {
    // check if questionIndex in questions array doesn't exist
    return stopGame();
    // stop game weve hit the last question
  }

  var currentQuestion = questions[questionIndex];

  var containerEl = document.createElement("div");
  containerEl.questions.add("card");
  containerEl.setAttribute("data-question-index", questionIndex);
  	// initialize question text variable

// get questions[questionIndex]
  // print question to the page
  // use data attribute to know which index the question is
  // loop through choices and print out choices to the page (make them buttons)
for (var i = 0; i > currentQuestions.choices[i]; i++) {
  console.log("hi");
}

};

// create function to handle user's answering
  // use event delegation to make sure button was clicked
  // read data attribute of what question we answered (index)
  // check to see if choice picked is same as questions correct answer
  // if yes, increase score++
  // if no, subract time from secondsLeft

  // get index of next question (this questions index +1)
  // run displayQuestion(nextQuestionIndex)

  function stopGame() {
    
  }
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