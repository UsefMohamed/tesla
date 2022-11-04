let menu_btn = document.getElementById("menu_btn");
let aside = document.getElementById("aside");
let section = document.getElementsByTagName("section");
let button = document.querySelector("button");
document.onclick = function (e) {
  if (e.target.id == "aside" && e.target.id == "menu_btn") {
    aside.classList.remove("effect");
    menu_btn.classList.remove("effect");
  }
};
menu_btn.onclick = function () {
  aside.classList.add("effect");
  aside.classList.add("opacity");
  menu_btn.classList.toggle("aside-btn");
  document.getElementById("blur_ele").classList.add("show_blur");
};
button.onclick = function () {
  aside.classList.toggle("effect");
  aside.classList.toggle("opacity");
  document.getElementById("blur_ele").classList.remove("show_blur");
};
let prog_bar = document.getElementById("prog-bar");
let hieght =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  prog_bar.style.width = `${(scrollTop / hieght) * 100}%`;
});
