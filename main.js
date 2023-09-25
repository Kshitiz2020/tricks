const backButton = document.querySelector("#backToTop");
const mobButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");
const header = document.querySelector("header");
const modalButton = document.querySelector("#modalButton");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close");

window.onscroll = function () {
  scrollFunction(); //browser onscroll event trigger
};

// code from w3schools about scrolling for two browsers
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backButton.style.display = "block";
  } else {
    backButton.style.display = "none";
  }
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
}

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (const item of menuItems) {
    item.addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};

const modalShow = () => {
  overlay.classList.toggle("visible");
};
backButton.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);
closeButton.addEventListener("click", modalShow);
modalButton.addEventListener("click", modalShow);
