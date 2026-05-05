import { getRecipes, saveRecipes } from "./storage.js";
const recipes = getRecipes();

const container = document.getElementById("cards");
const template = document.getElementById("cardTemplate");

recipes.forEach(recipe => {
    // clone template
    const clone = template.content.cloneNode(true);

    // fill data
    const card = clone.querySelector(".recipe-card");
    const img = clone.querySelector("img");
    const title = clone.querySelector(".card-title");
    const desc = clone.querySelector(".card-text");

    const servings = clone.querySelector(".servings");
    const cookTime = clone.querySelector(".cook-time");
    const difficulty = clone.querySelector(".difficulty");

    // set values
    card.href = `recipe.html?id=${recipe.Id}`;
    img.src = recipe.ImageURL;
    title.textContent = recipe.Name;
    desc.textContent = recipe.Description;

    servings.textContent = recipe.Servings;
    cookTime.textContent = recipe.CookTime;
    difficulty.textContent = recipe.Difficulty;

    // append to grid
    container.appendChild(clone);
});