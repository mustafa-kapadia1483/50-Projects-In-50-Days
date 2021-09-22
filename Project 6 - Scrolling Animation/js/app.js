const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", showBoxes);

showBoxes();

function showBoxes() {
  const windowBottom = window.innerHeight;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < windowBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
