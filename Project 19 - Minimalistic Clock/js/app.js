const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

function getDayName(date) {
  return date.toLocaleDateString("default", { weekday: "long" });
}

function getMonthName(date) {
  return date.toLocaleString("default", { month: "short" });
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

toggle.addEventListener("click", e => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark Mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light Mode";
  }
});

function setTime() {
  const timeDate = new Date();
  const month = getMonthName(timeDate);
  const day = getDayName(timeDate);
  const hours = timeDate.getHours();
  const hoursForClock = hours % 12;
  const minutes = timeDate.getMinutes();
  const seconds = timeDate.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds} ${ampm}`;

  dateEl.innerHTML = `${getDayName(timeDate)}, ${getMonthName(
    timeDate
  )} <span class="circle">${timeDate.getDay()}</span>`;
}

setTime();
setInterval(setTime, 1000);
