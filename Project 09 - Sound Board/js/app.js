const audios = document.querySelectorAll("audio");
const btnContainer = document.querySelector(".buttons");

const stopAllAudios = () => {
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
};

audios.forEach(audio => {
  const btn = document.createElement("button");
  btn.innerText = audio.id;
  btn.classList.add("btn");
  btnContainer.append(btn);

  btn.addEventListener("click", () => {
    stopAllAudios();
    audio.play();
  });
});
