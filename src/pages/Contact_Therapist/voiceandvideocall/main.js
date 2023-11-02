const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let minutesCount = 60;
let secondsCount = 0;

function countTime() {
  if (secondsCount == 0) {
    minutesCount--;
    secondsCount = 59;
  } else {
    secondsCount--;
  }

  setTimeout(countTime, 1000);

  if (secondsCount < 10) {
    seconds.textContent = `0${secondsCount}`;
  } else {
    seconds.textContent = secondsCount;
  }

  if (minutesCount < 10) {
    minutes.textContent = `0${minutesCount}`;
  } else {
    minutes.textContent = minutesCount;
  }
}

countTime();
