let [hours, minutes, seconds] = [0, 0, 0];
let display = document.getElementById("display");
let interval = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (interval) return;
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  pause();
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  const lapTime = display.innerText;
  const lapList = document.getElementById("laps");
  const lapItem = document.createElement("li");
  lapItem.innerText = `Lap - ${lapTime}`;
  lapList.appendChild(lapItem);
}
