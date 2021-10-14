const smallCups = document.querySelectorAll(".cup-small");
const litres = document.querySelector("#litres");
const percentage = document.querySelector("#percentage");
const remaining = document.querySelector("#remaining");

updateBigCup();

smallCups.forEach((smallCup, index) => {
  smallCup.addEventListener("click", () => highLightCups(index));
});

function highLightCups(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }
  smallCups.forEach((cup, i) => {
    if (i <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = "0";
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remaining.style.visibility = "hidden";
    remaining.style.height = "0";
  } else {
    remaining.style.visibility = "visible";
    litres.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
