const choiceInput = document.querySelector("#choices-input");
const choicesContainer = document.querySelector(".choices-container");

choiceInput.focus();

const createChoices = input => {
  const choices = input
    .split(",")
    .filter(choice => choice.trim() !== "")
    .map(choice => choice.trim());

  choicesContainer.innerHTML = "";

  choices.forEach(choice => {
    const choiceEl = document.createElement("span");
    choiceEl.classList.add("choice");
    choiceEl.innerText = choice;
    choicesContainer.append(choiceEl);
  });
};

const setActive = choice => {
  choice.classList.add("active");
};

const removeActive = choice => {
  choice.classList.remove("active");
};

const pickRandomChoice = () => {
  const choices = document.querySelectorAll(".choice");
  return choices[Math.floor(Math.random() * choices.length)];
};

const randomSelect = () => {
  const times = 30;
  const interval = setInterval(() => {
    const randomChoice = pickRandomChoice();
    setActive(randomChoice);

    setTimeout(() => {
      removeActive(randomChoice);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomChoice = pickRandomChoice();
      setActive(randomChoice);
    }, 100);
  }, times * 100);
};

choiceInput.addEventListener("keyup", e => {
  choiceInput.value = choiceInput.value.replace(" ", "");
  if (e.key === "Enter") {
    randomSelect();
    setTimeout(() => {
      e.target.value = "";
    }, 10);
  }
  createChoices(e.target.value);
});
