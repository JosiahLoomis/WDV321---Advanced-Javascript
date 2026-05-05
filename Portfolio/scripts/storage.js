export function getRecipes() {
    return JSON.parse(localStorage.getItem("recipes")) || [];
}

export function saveRecipes(recipes) {
    localStorage.setItem("recipes", JSON.stringify(recipes));
}

export function getRecipeById(id) {
    const recipes = getRecipes();
    return recipes.find(r => r.Id == id);
}

export function deleteRecipeById(id) {
    let recipes = getRecipes();
    recipes = recipes.filter(r => r.Id != id);
    saveRecipes(recipes);
}