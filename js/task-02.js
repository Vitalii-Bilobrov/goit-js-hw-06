const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const itemsList = ingredients.map((el) => {
  const liItem = document.createElement("li");
  liItem.textContent = el;
  liItem.classList.add("item");
  return liItem;
});
console.log(itemsList);
list.append(...itemsList);
