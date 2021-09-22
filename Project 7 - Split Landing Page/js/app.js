const left = document.querySelector("#left");
const right = document.querySelector("#right");

left.addEventListener("mouseenter", () => {
  left.style.flex = "0 0 70%";
});

left.addEventListener("mouseleave", () => {
  left.style.flex = "0 0 50%";
});

right.addEventListener("mouseenter", () => {
  left.style.flex = "0 0 30%";
  right.style.flex = "0 0 70%";
});

right.addEventListener("mouseleave", () => {
  left.style.flex = "0 0 50%";
  right.style.flex = "0 0 50%";
});
