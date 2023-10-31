var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startButton = document.querySelector(".start-button");
var nextBtn = document.getElementById("next");
var numberofQuestions = document.querySelector(".question-amount")
var isCorrect = false;

function countdown() {
    var timeLeft = 60;
  
    
    var timeInterval = setInterval(function () {

      if (timeLeft >= 0) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = 'Time is Up!';
    
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }

function renderBlanks() {

}

function startQuiz() {
    isCorrect = false;
    timerCount = 60;
    startButton.disabled = true;
    renderB


}

next.addEventListener("click", function(event){
    event.stopPropagation();
    
    NavigationPreloadManager(1);
})
  startButton.addEventListener("click", startQuiz);
  countdown();