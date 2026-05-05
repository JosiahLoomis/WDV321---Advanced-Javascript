import { getRecipeById, deleteRecipeById } from "./storage.js";

console.log("yo");

// get id from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// find recipe
const recipe = getRecipeById(id);

if (!recipe) {
    document.body.innerHTML = "<h1>Recipe not found</h1>";
    throw new Error("Recipe not found");
}

// populate page
document.getElementById("recipe-name").textContent = recipe.Name;
document.getElementById("recipe-description").textContent = recipe.Description;
document.getElementById("servings").textContent = recipe.Servings;
document.getElementById("cook-time").textContent = recipe.CookTime;
document.getElementById("difficulty").textContent = recipe.Difficulty;
document.querySelector(".recipe-image").src = recipe.ImageURL;




// ingredients
const servingsInput = document.getElementById("servings-input");
const ingredientsList = document.getElementById("ingredients-list");

let customServingCount = recipe.Servings;
servingsInput.value = recipe.Servings;

const loadIngredients = () => {
    ingredientsList.innerHTML = "";

    recipe.Ingredients.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        li.innerHTML = `
            <span class="qty">${item.AmtPerServing * customServingCount}</span>
            ${item.Ingredient}
        `;

        ingredientsList.appendChild(li);
    });
}

servingsInput.addEventListener("change", () => {
    customServingCount = servingsInput.value;
    loadIngredients();
});

loadIngredients();

// instructions
const instructionsList = document.getElementById("instructions-list");
instructionsList.innerHTML = "";

recipe.Instructions.forEach(step => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = step;

    instructionsList.appendChild(li);
});

// edit
document.getElementById("edit-btn").addEventListener("click", () => {
    window.location.href = `add.html?id=${recipe.Id}`;
});

// delete
document.getElementById("delete-btn").addEventListener("click", () => {
    const confirmed = confirm("Are you sure you want to delete this recipe?");

    if (!confirmed) return;

    deleteRecipeById(recipe.Id);

    window.location.href = "index.html";
});