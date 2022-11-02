const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  if (Number(textInput.value.length) === Number(textInput.dataset.length)) {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});
console.log(Number(textInput.value.length));
console.log(Number(textInput.dataset.length));
