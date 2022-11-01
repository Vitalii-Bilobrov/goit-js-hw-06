const amount = document.querySelectorAll("#categories > li");
console.log("Number of categories: " + amount.length);

for (let item of amount) {
  console.log("Category: " + item.querySelector("h2").textContent);
  console.log("Elements: " + item.querySelector("h2").textContent.length);
}
