let menu_btn = document.getElementById("menu_btn");
let aside = document.getElementById("aside");

document.onclick = function (e) {
  if (e.target.id == "aside" && e.target.id == "menu_btn") {
    aside.classList.remove("effect");
    menu_btn.classList.remove("effect");
  }
};
menu_btn.onclick = function () {
  aside.classList.toggle("effect");
  aside.classList.toggle("opacity");
};
let prog_bar = document.getElementById("prog-bar");
let hieght =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  prog_bar.style.width = `${(scrollTop / hieght) * 100}%`;
});
