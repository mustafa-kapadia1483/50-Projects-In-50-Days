const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

setBgToBody();
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

leftBtn.addEventListener("click", () => {
  if (activeSlide == 0) {
    return;
  }
  slides[activeSlide].classList.remove("active");
  activeSlide--;
  setBgToBody();
  slides[activeSlide].classList.add("active");
});

rightBtn.addEventListener("click", () => {
  if (activeSlide == slides.length - 1) {
    return;
  }
  slides[activeSlide].classList.remove("active");
  activeSlide++;
  setBgToBody();
  slides[activeSlide].classList.add("active");
});
