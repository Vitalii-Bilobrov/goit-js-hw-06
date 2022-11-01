function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector(".change-color");
const text = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", onButtonClick);
function onButtonClick(event) {
  text.textContent = getRandomHexColor();
  body.style.backgroundColor = text.textContent;
}
