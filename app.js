let menuBtn = document.querySelector(".hamburger");
let list = document.querySelector(".mobile-menu");
let menu_img = document.querySelector(".hamburger img");
menuBtn.addEventListener("click", () => {
  list.classList.toggle("fade-out");
  menu_img.classList.toggle("change-img");
  if (list.classList.contains("fade-out")) {
    menu_img.src = "https://www.frontendpractice.com/icons/close-50.png";
  } else {
    menu_img.src =
      "https://www.frontendpractice.com/icons/hamburger-menu-50.png";
  }
});
