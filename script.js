const toggler = document.querySelector(".hamburger");
const navBar = document.querySelector(".navlinks");
const navLinkItems = navBar.querySelectorAll("a");
const animatedCards = document.querySelectorAll(".animate");

toggler.onclick = () => {
  toggler.classList.toggle("active");
  navBar.classList.toggle("active");
};

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    toggler.classList.remove("active");
    navBar.classList.remove("active");
  });
});

const revealOnScroll = () => {
  const triggerPoint = window.innerHeight - 100;

  animatedCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerPoint) {
      card.classList.add("show");
    }
  });
};

// Run on scroll
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

