function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");
const input = document.querySelector("#controls > input");
const boxes = document.querySelector("#boxes");

console.log(boxes);

input.addEventListener("input", createBoxes);

divElement.style.width = 0;
divElement.style.height = 0;

function createBoxes(ivent) {
  for (let i = 1; i <= input.value; i += 1);
  let divElement = document.createElement("div");
  divElement.style.width += 30 + "px";
  divElement.style.height += 30 + "px";
  divElement.style.color = getRandomHexColor();
  boxes.append(divElement);
}
