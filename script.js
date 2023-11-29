let intervalIds = [null, null];
let timeLeft = [200, 200];

function startStop(clockNumber) {
  if (intervalIds[clockNumber - 1] === null) {
    intervalIds[clockNumber - 1] = setInterval(function() {
      if (timeLeft[clockNumber - 1] > 0) {
        timeLeft[clockNumber - 1]--;
        updateTime(clockNumber);
      } else {
        clearInterval(intervalIds[clockNumber - 1]);
        intervalIds[clockNumber - 1] = null;
      }
    }, 1000);
  } else {
    clearInterval(intervalIds[clockNumber - 1]);
    intervalIds[clockNumber - 1] = null;
  }
}

function subtractTime(clockNumber) {
  if (timeLeft[clockNumber - 1] >= 20 && intervalIds[clockNumber - 1] === null) {
    timeLeft[clockNumber - 1] -= 20;
    updateTime(clockNumber);
  }
}

function updateTime(clockNumber) {
  const hours = Math.floor(timeLeft[clockNumber - 1] / 3600);
  const minutes = Math.floor((timeLeft[clockNumber - 1] % 3600) / 60);
  const seconds = timeLeft[clockNumber - 1] % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById(`clock${clockNumber}`).innerText = formattedTime;
}
