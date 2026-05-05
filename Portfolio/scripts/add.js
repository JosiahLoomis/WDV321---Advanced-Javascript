import { getRecipes, saveRecipes } from "./storage.js";

// check if were editing or adding (were editing if there was an id in the url)
const params = new URLSearchParams(window.location.search);
const editId = params.get("id");

let recipes = getRecipes();

// Add new recipie
document.getElementById("recipe-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // get data
    const Name = document.getElementById("recipe-name").value;
    const Description = document.getElementById("recipe-description").value;
    const Servings = Number(document.getElementById("recipe-servings").value);
    const CookTime = document.getElementById("recipe-cooktime").value;
    const Difficulty = document.getElementById("recipe-difficulty").value;
    const ImageURL = document.getElementById("recipe-image").value;

    // set data
    const recipe = {
        Id: editId ? Number(editId) : Date.now(),
        Name,
        Description,
        Servings,
        CookTime,
        Difficulty,
        ImageURL,
        Ingredients: [],
        Instructions: []
    };

    // ingredients
    document.querySelectorAll(".ingredient-row").forEach(row => {
        const amount = Number(row.querySelector(".ingredient-amount").value);
        const ingredient = row.querySelector(".ingredient-name").value;

        recipe.Ingredients.push({
            Amount: amount,
            Ingredient: ingredient,
            AmtPerServing: amount / Servings
        });
    });

    // instructions
    document.querySelectorAll(".instruction-row").forEach(row => {
        recipe.Instructions.push(
            row.querySelector(".instruction-text").value
        );
    });

    // Push + save
    if (editId) {
        // update existing recipe
        recipes = recipes.map(r => r.Id == editId ? recipe : r);
        saveRecipes(recipes);
        window.location.href = `recipe.html?id=${recipe.Id}`;
    } else {
        // add new recipe
        recipes.push(recipe);
        saveRecipes(recipes);
        window.location.href = "index.html";
    }
});

// Add ingredient
const template = document.getElementById("ingredientsTemplate");
const container = document.getElementById("ingredients");

document.getElementById("addIngredient").addEventListener("click", () => {
    console.log("SAKID");
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);
});

// Add instruction
const instructionTemplate = document.getElementById("instructionsTemplate");
const instructionContainer = document.getElementById("instructions");

document.getElementById("addInstruction").addEventListener("click", () => {
    const clone = instructionTemplate.content.cloneNode(true);
    instructionContainer.appendChild(clone);
});

// Remove ingredient/instruction
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-btn")) {
        e.target.closest(".ingredient-row, .instruction-row").remove();
    }
});

// fill page with recipe if editing
if (editId) {
    const recipe = recipes.find(r => r.Id == editId);

    if (recipe) {
        document.getElementById("recipe-name").value = recipe.Name;
        document.getElementById("recipe-description").value = recipe.Description;
        document.getElementById("recipe-servings").value = recipe.Servings;
        document.getElementById("recipe-cooktime").value = recipe.CookTime;
        document.getElementById("recipe-difficulty").value = recipe.Difficulty;
        document.getElementById("recipe-image").value = recipe.ImageURL;

        document.getElementById("ingredients").innerHTML = "";
        document.getElementById("instructions").innerHTML = "";

        // load ingredients
        recipe.Ingredients.forEach(item => {
            document.getElementById("addIngredient").click();

            const rows = document.querySelectorAll(".ingredient-row");
            const last = rows[rows.length - 1];

            last.querySelector(".ingredient-amount").value = item.Amount;
            last.querySelector(".ingredient-name").value = item.Ingredient;
        });

        // load instructions
        recipe.Instructions.forEach(step => {
            document.getElementById("addInstruction").click();

            const rows = document.querySelectorAll(".instruction-row");
            const last = rows[rows.length - 1];

            last.querySelector(".instruction-text").value = step;
        });
    }
}