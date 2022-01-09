const cardHeader = document.querySelector(".card-header");
const cardTitle = document.querySelector(".card-title");
const cardExcerpt = document.querySelector(".card-excerpt");
const authorImg = document.querySelector(".profile-img");
const authorName = document.querySelector(".author-name");
const authorDate = document.querySelector(".author-date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  cardHeader.innerHTML = `<img src="https://images.unsplash.com/photo-1472017053394-b29fded587cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">`;

  cardTitle.innerHTML = "Lorem ipsum dolor sit amet";
  cardExcerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, atque!" +
    cardExcerpt.innerHTML;
  authorImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">';
  authorName.innerHTML = "John Doe";
  authorDate.innerHTML = "Dec 14, 2021";

  animatedBgs.forEach(el => el.classList.remove("animated-bg"));
  animatedBgTexts.forEach(el => el.classList.remove("animated-bg-text"));
}
