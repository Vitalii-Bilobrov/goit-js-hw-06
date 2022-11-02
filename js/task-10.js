function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate = document.querySelector("#controls button[data-create]");
const btnDestroy = document.querySelector("#controls button[data-destroy]");
const input = document.querySelector("#controls > input");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(event) {
  let w = 20;
  let h = 20;
  for (let i = 1; i <= Number(input.value); i += 1) {
    let divElement = document.createElement("div");
    w += 10;
    h += 10;
    divElement.style.width = `${w}px`;
    divElement.style.height = `${h}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    boxes.append(divElement);
  }
}
console.log(boxes.children);
function destroyBoxes(event) {
  if (boxes.children) {
    boxes.innerHTML = "";
  } else {
    return;
  }
}
