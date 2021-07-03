const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsUlRef = document.querySelector("#ingredients");
// console.log(ingredientsUlRef);

const ingredientsLiEl = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientElement = document.createElement("li");
    ingredientElement.textContent = ingredient;
    return ingredientElement;
  });
};

const liEl = ingredientsLiEl(ingredients);

ingredientsUlRef.append(...liEl);
