"use strict";
const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
