const fetchImages = async () => {
  const response = await axios.get("https://forza-api.tk/");
  return response.data.image;
};

const panels = document.querySelectorAll(".panel");

panels.forEach(async panel => {
  const imgSrc = await fetchImages();
  panel.style.backgroundImage = `url("${imgSrc}")`;

  const titleText = imgSrc.slice(25).replace(".png", "").replaceAll("_", " ");
  panel.querySelector("h3").innerText = titleText;

  panel.addEventListener("click", () => {
    removeActiveClasses(panels);
    panel.classList.add("active");
  });
});

const removeActiveClasses = panels => {
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
};
