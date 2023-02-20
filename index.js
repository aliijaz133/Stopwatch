var stopwatch; // variable to hold setInterval function
var milliseconds = 0,
  seconds = 0,
  minutes = 0,
  hours = 0;

function displayStopwatch() {
  // update time values
  milliseconds += 1;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  // display time values in stopwatch element
  var stopwatchElement = document.getElementById("stopwatch");
  stopwatchElement.innerHTML =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    "." +
    (milliseconds < 10 ? (milliseconds < 10 ? "00" : "00") : "") +
    milliseconds;
}

const startButton = document.getElementById("startTimer");

startButton.addEventListener("click", startStopwatch);

function startStopwatch() {
  // start setInterval function to update stopwatch every 10 milliseconds
  stopwatch = setInterval(displayStopwatch, 10);
}

const pauseButton = document.getElementById("pauseTimer");
{
  pauseButton.addEventListener("click", stopStopwatch);

  function stopStopwatch() {
    // stop setInterval function
    clearInterval(stopwatch);
  }
}

const resetButton = document.getElementById("resetTimer");
resetButton.addEventListener("click", resetStopwatch);
function resetStopwatch() {
  // reset time values and display in stopwatch element
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  var stopwatchElement = document.getElementById("stopwatch");
  stopwatchElement.innerHTML = "00 : 00 : 00 : 00";
}

const splitButton = document.getElementById("splitTimer");
splitButton.addEventListener("click", splitTime);

function splitTime() {
  var newTime = document.getElementById("setList").ariaValueMax;
  if (newTime !== "") {
    var li = document.createElement("li");
    li.innerHTML =
      hours + " : " + minutes + " : " + seconds + " : " + milliseconds;
    document.getElementById("setList").appendChild(li);
  }
}
