const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", (ivent) => {
  text.style.fontSize = input.value + "px";
});
