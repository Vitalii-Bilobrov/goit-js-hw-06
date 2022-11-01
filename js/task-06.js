const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  // ЧОМУ ЦЕЙ КОД НЕ СПРАЦЬОВУЄ?
  //   if (textInput.value === "") {
  //     textInput.style.borderColor = "#bdbdbd";
  //   }
  if (textInput.value == textInput.dataset.length) {
    textInput.style.borderColor.classList.add = "valid";
  } else {
    textInput.style.borderColor.classList.add = "invalid";
  }
});
console.log(textInput.dataset.length);
