let menu_btn = document.getElementById("menu_btn");
let aside = document.getElementById("aside");
let closing_btn = document.getElementById("closing_btn");

document.onclick = function (e) {
  if (e.target.id == "aside" && e.target.id == "menu_btn") {
    aside.classList.remove("effect");
    menu_btn.classList.remove("effect");
  }
};
menu_btn.onclick = function () {
  aside.classList.toggle("effect");
};
closing_btn.onclick = function () {
  aside.classList.remove("effect");
};
let prog_bar = document.getElementById("prog-bar");
let hieght =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  prog_bar.style.width = `${(scrollTop / hieght) * 100}%`;
});
