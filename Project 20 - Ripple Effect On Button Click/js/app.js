const btn = document.querySelector(".ripple");

btn.addEventListener("click", e => {
  const x = e.clientX;
  const y = e.clientY;

  const btnTop = e.target.offsetTop;
  const btnLeft = e.target.offsetLeft;

  const xInside = x - btnLeft;
  const yInside = y - btnTop;

  const circle = document.createElement("span");
  circle.classList.add("circle");
  circle.style.top = `${yInside}px`;
  circle.style.left = `${xInside}px`;

  btn.append(circle);
  setTimeout(() => circle.remove(), 500);
});
