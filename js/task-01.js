const amount = document.querySelectorAll("#categories > li");
console.log("Number of categories: " + amount.length);

amount.forEach((el) => {
  console.log("Category: " + el.querySelector("h2").textContent);
  console.log("Elements: " + el.querySelector("h2").textContent.length);
});
