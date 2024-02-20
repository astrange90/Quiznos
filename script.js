


var timeLeft = 10; //Changed time so I can see what my timer does when it ends, debugging

function setTime() {
    var timeInterval = setInterval(function() {
      timeLeft--;
      timerEl.textContent = timeLeft + " Time Remaining";

      if (timeLeft === 0) {
        clearInterval(timeInterval);
        sendMessage();
      }

    }, 1000);
  }

  function sendMessage() {
    timerEl.textContent = "Time Is Up!";

  }

  setTime();
