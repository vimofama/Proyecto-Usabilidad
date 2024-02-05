const menuButton = document.getElementById("menuButton");
const list = document.querySelector("ul");
list.classList.toggle("absolute");

menuButton.addEventListener("click", function () {
  list.classList.toggle("absolute");
  if (list.classList.contains("top-[80px]")) {
    list.classList.remove("top-[80px]");
    list.classList.remove("opacity-100");
  } else {
    list.classList.add("top-[80px]");
    list.classList.add("opacity-100");
  }
});
