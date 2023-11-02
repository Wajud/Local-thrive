// mooodtrack and mood note js---------------
const dailyDate = document.querySelector(".everyDayDate");
const userNote = document.forms[".userNote"];
const noteInput = document.querySelector(".todayNoteInput");
const inputSubmit = document.querySelector(".inputSubmit");
const dailyMood = document.querySelector(".dailyMood");
const dailyMoodAppend = document.querySelector(".dailyMoodAppend");
const quote = document.querySelector(".quote");
const popQuote = document.querySelector(".popQuote");

// daily date--------------
const now = new Date();
const day = now.getDate();
const month = now.toLocaleString("default", { month: "long" });
const year = now.getFullYear();

dailyDate.innerHTML = `${day}th ${month} ${year}`;

// quote of the day---------------
quote.addEventListener("click", function () {
  popQuote.classList.remove("hidden");
  document.querySelector("body").style.overflow = "hidden";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    popQuote.classList.add("hidden");
    document.querySelector("body").style.overflow = "auto";
  }
});

// const quoteOpen = function () {
//   // overlay.classList.remove("hidden");
//   modal.classList.remove("hidden");
// };

// quoteOpen()

// const quoteClose = function () {
//   overlay.classList.add("hidden");
//   modal.classList.add("hidden");
// };
// btnCloseModal.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

// emoji javascript---------------

function excitedButton() {
  document.getElementById("excitedCount").innerHTML++;
}

function veryHappyButton() {
  document.getElementById("anxiousCount").innerHTML++;
}

function happyButton() {
  document.getElementById("happyCount").innerHTML++;
}

function chillButton() {
  document.getElementById("chillCount").innerHTML++;
}
function neutralButton() {
  document.getElementById("neutralCount").innerHTML++;
}
function sadButton() {
  document.getElementById("sadCount").innerHTML++;
}
function anxiousButton() {
  document.getElementById("anxiousCount").innerHTML++;
}
function angryButton() {
  document.getElementById("angryCount").innerHTML++;
}
function stressedButton() {
  document.getElementById("stressedCount").innerHTML++;
}

// quote of the day---------------

// user safe place for mood---------
function addItem(e) {
  e.preventDefault();
  let userInput = document.getElementById("mood").value;
  document.querySelector(".todayNoteInput").innerText += userInput;
}
