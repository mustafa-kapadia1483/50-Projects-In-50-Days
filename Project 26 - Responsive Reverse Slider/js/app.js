const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const slidesLength = slideRight.querySelectorAll("div").length;
console.log(slidesLength);

let activeSLideIndex = 0;

if (window.matchMedia("(min-width: 768px)").matches) {
  slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

  upBtn.addEventListener("click", () => changeSlide("up"));
  downBtn.addEventListener("click", () => changeSlide("down"));

  const changeSlide = direction => {
    const sliderHeight = sliderContainer.clientHeight;
    if (direction === "up") {
      activeSLideIndex++;
      if (activeSLideIndex > slidesLength - 1) {
        activeSLideIndex = 0;
      }
    } else if (direction === "down") {
      activeSLideIndex--;
      if (activeSLideIndex < 0) {
        activeSLideIndex = slidesLength - 1;
      }
    }

    slideRight.style.transform = `translateY(-${
      activeSLideIndex * sliderHeight
    }px)`;
    slideLeft.style.transform = `translateY(${
      activeSLideIndex * sliderHeight
    }px)`;
  };
} else {
  slideLeft.style.left = `-${(slidesLength - 1) * 100}vw`;
  const upBtn = document.querySelector(".mobile .up-button");
  const downBtn = document.querySelector(".mobile .down-button");
  upBtn.addEventListener("click", () => changeSlide("up"));
  downBtn.addEventListener("click", () => changeSlide("down"));

  const changeSlide = direction => {
    const sliderWidth = sliderContainer.clientWidth;
    if (direction === "up") {
      activeSLideIndex++;
      if (activeSLideIndex > slidesLength - 1) {
        activeSLideIndex = 0;
      }
    } else if (direction === "down") {
      activeSLideIndex--;
      if (activeSLideIndex < 0) {
        activeSLideIndex = slidesLength - 1;
      }
    }

    slideRight.style.transform = `translateX(-${
      activeSLideIndex * sliderWidth
    }px)`;
    slideLeft.style.transform = `translateX(${
      activeSLideIndex * sliderWidth
    }px)`;
  };
}
