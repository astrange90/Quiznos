var body = document.body;
var startBtn = document.querySelector(".start-quiz");
var timerEl = document.querySelector(".countdown");


var timerCount;
var timer;
var score = 0;

var questions = [
  {
    question: "What is the meaning of HTML?",
    choices: ["Hypertext Markup Language", "Highway", "Hidden Management", "Higher Tolerance"],
    answer: "Hypertext Markup Language"
  },
  {
    question: "What is the meaning of HTML 1?",
    choices: ["Hypertext Markup Language", "Highway", "Hidden Management", "Higher Tolerance"],
    answer: "Hypertext Markup Language"
  },
  {
    question: "What is the meaning of HTML 2?",
    choices: ["Hypertext Markup Language", "Highway", "Hidden Management", "Higher Tolerance"],
    answer: "Hypertext Markup Language"
  },
  {
    question: "What is the meaning of HTML 3?",
    choices: ["Hypertext Markup Language", "Highway", "Hidden Management", "Higher Tolerance"],
    answer: "Hypertext Markup Language"
  },
  {
    question: "What is the meaning of HTML 4?",
    choices: ["Hypertext Markup Language", "Highway", "Hidden Management", "Higher Tolerance"],
    answer: "Hypertext Markup Language"
  },

];

var gameLvl = 0;

function questionArray() {
  var currentLvl = questions[gameLvl]
  document.getElementById("question").textContent = currentLvl.question
  document.getElementById("button").innerHTML = ""
  for (var i = 0; i < currentLvl.choices.length; i++) {
    var btn = document.createElement("button")
    btn.textContent = currentLvl.choices[i]
    btn.onclick = answerQuestion
    document.getElementById("button").append(btn)
  }
}

function answerQuestion () {
  console.log(this)
  var currentLvl = questions[gameLvl]
  if (this.textContent === currentLvl.answer) {
    console.log("correct")
  } else {
    console.log("wrong")
    timerCount -= 15
  }
  gameLvl++
  if (gameLvl >= questions.length) {
    console.log("Game Over")
  //Game Over function here
  } else {
  questionArray()
  }
  
}

function startGame() {
  var startQuizEl = document.getElementById("start-quiz");
  startQuizEl.setAttribute("class", "hide");
  document.getElementById("quiz").classList.remove("hide")
  timerCount = 100;
  setTime()
  questionArray()
}


function setTime() {
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount + " Time Remaining";

    if (timerCount <= 0) {
      clearInterval(timer);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timerEl.textContent = "Time Is Up!";

}


startBtn.addEventListener("click", startGame);