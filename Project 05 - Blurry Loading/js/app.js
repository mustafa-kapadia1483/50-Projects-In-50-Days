const loadingText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let loadCount = 0;

const blurring = () => {
  loadCount++;

  if (loadCount > 99) {
    clearInterval(interval);
  }

  loadingText.innerText = `${loadCount}%`;
  loadingText.style.opacity = `${scale(loadCount, 0, 100, 1, 0)}`;
  bg.style.filter = `blur(${scale(loadCount, 0, 100, 30, 0)}px)`;
};

let interval = setInterval(blurring, 30);

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
