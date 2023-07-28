const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  // Quando lo scroll supera 100px dalla cima, aggiungi una classe "scrolled" alla navbar
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
