const jokeEl = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// const generateJoke = () => {
//   fetch("https://icanhazdadjoke.com", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then(response => response.json())
//     .then(data => {
//       jokeEl.innerText = data.joke;
//     });
// };

// Refactoring the above code using async await
const generateJoke = async () => {
  const res = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();
  jokeEl.innerText = data.joke;
};

generateJoke();

jokeBtn.addEventListener("click", generateJoke);
