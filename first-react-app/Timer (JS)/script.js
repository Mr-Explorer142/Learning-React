// Selectors
const dateShow = document.getElementById("date-text");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");

// Variables
let totalSeconds = 0;
let initialSeconds = 0;
let timer = null;

// Functions
function updateDisplay(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  dateShow.textContent = `${hrs}:${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

function startCountdown() {
  if (totalSeconds <= 0 || timer) return;

  document.getElementById("finish-message").textContent = "";

  timer = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay(totalSeconds);
    } else {
      clearInterval(timer);
      timer = null;
      document.getElementById("finish-message").textContent = "Time's up!";
      const sound = new Audio("alarm.mp3");
      sound.play();
    }
  }, 1000);
}

function pauseCountdown() {
  clearInterval(timer);
  timer = null;
}

function resetCountdown() {
  clearInterval(timer);
  timer = null;
  totalSeconds = initialSeconds; // totalSeconds = 0
  updateDisplay(totalSeconds);
  document.getElementById("finish-message").textContent = "";
}

function disableInputs(disabled) {
  hoursInput.disabled = disabled;
  minutesInput.disabled = disabled;
  secondsInput.disabled = disabled;
}

// Event Listeners
startBtn.addEventListener("click", () => {
  disableInputs(true);

  if (initialSeconds === 0) {
    const hrs = parseInt(hoursInput.value) || 0;
    const mins = parseInt(minutesInput.value) || 0;
    const secs = parseInt(secondsInput.value) || 0;

    initialSeconds = hrs * 3600 + mins * 60 + secs;
    totalSeconds = initialSeconds;
    updateDisplay(totalSeconds);
  }

  startCountdown();
});

pauseBtn.addEventListener("click", pauseCountdown);
resetBtn.addEventListener("click", () => {
  disableInputs(false);
  resetCountdown();
  initialSeconds = 0;
  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
});
