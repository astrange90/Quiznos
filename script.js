var body = document.body;
var startBtn = document.querySelector("start-quiz");
var timerEl = document.querySelector(".countdown");


var timerCount;
var timer;
var score = 0;

var questions = [
  {
    question: "What is the meaning of HTML?",
    choices: ["Hypertext Markup Language", "Highway", "Hidden Management", "Higher Tolerance"],
    answer: "Hypertext Markup Language"
  }
];


 function startGame() {
  var startQuizEl = document.getElementById("start-quiz");
  startQuizEl.setAttribute("class", "hide");
  timerCount = 10;
  setTime ()
  
}


function setTime() {
    timer = setInterval(function() {
      timerCount--;
      timerEl.textContent = timerCount + " Time Remaining";

      if (timerCount === 0) {
        clearInterval(timeInterval);
        sendMessage();
      }

    }, 1000);
  }

  function sendMessage() {
    timerEl.textContent = "Time Is Up!";

  }

  setTime();

  startBtn.addEventListener("click", startGame);