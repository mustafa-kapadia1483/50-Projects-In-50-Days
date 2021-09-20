const searchContainer = document.querySelector(".search");
const searchBtn = document.querySelector(".btn");

searchBtn.addEventListener("click", () => {
  searchContainer.classList.toggle("active");
});
