var body = document.body;
var startBtn = document.querySelector(".start-quiz");
var timerEl = document.querySelector(".countdown");



var timerCount;
var timer;
var score = 0;
var gameLvl = 0;

var questions = [
  {
    question: "What is the abbreviation meaning of HTML?",
    choices: ["A) Hypertext Markup Language", " B) High Throughput Machine Learning", " C) Hypertext Markup Line", " D) High Traffic Machine Language"],
    answer: "A) Hypertext Markup Language"
  },
  {
    question: "What is a header? ",
    choices: ["A) An Element Container For Introductory Content or A Set Of Navigational Links", " B) An Element Container For Metadata", " C) Used To Differentiate The Headings and Subheadings", " D) None Of The Above"],
    answer: "A) An Element Container For Introductory Content or A Set Of Navigational Links"
  },
  {
    question: "What separates a Css style rule from the next? ",
    choices: ["A) /", " B) ;", " C) !", " D) ."],
    answer: " B) ;"
  },
  {
    question: "What is Javascript used for?",
    choices: ["A) Makes Surfing The Web Faster", " B) To Write Scripts For Google", " C) To Make Web Pages Interactive", " D) A Better Version Of CSS"],
    answer: " C) To Make Web Pages Interactive"
  },
  {
    question: "You're allowed to use JS variables in what ways? ",
    choices: ["A) Creating Objects", " B) Declaring a Value", " C) Used Within A Function", " D) All Of The Above"],
    answer: " D) All Of The Above"
  },
  

];



function questionArray() {
  var currentLvl = questions[gameLvl]
  document.getElementById("question").textContent = currentLvl.question
  document.getElementById("button").innerHTML = ""
  for (var i = 0; i < currentLvl.choices.length; i++) {
    var btn = document.createElement("button")
    btn.setAttribute("class", "start-quiz")
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
  var startQuizEl = document.getElementById("quiz-rules");
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