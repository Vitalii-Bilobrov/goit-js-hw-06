let counterValue = 0;

let counter = document.querySelector("#counter");
const decrement_button = document.querySelector(
  "#counter [data-action='decrement']"
);
const increment_button = document.querySelector(
  "#counter [data-action='increment']"
);
let value = document.querySelector("#value");

decrement_button.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
increment_button.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});
