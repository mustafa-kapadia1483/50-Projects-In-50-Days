const faqCards = document.querySelectorAll(".faq");

faqCards.forEach(faqCard => {
  faqCard.addEventListener("click", () => {
    faqCard.classList.toggle("active");
  });
});
