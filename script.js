const toggler = document.querySelector(".hamburger");
const navBar = document.querySelector(".navlinks");
const navLinkItems = navBar.querySelectorAll("a");

toggler.onclick = function () {
  toggler.classList.toggle("active");
  navBar.classList.toggle("active");
};

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    toggler.classList.remove("active");
    navBar.classList.remove("active");
  });
});

// window.addEventListener("DOMContentLoaded", () => {
//   const el = document.getElementById("myElement");
//   requestAnimationFrame(() => {
//     el.classList.add("visible");
//   });
// });

