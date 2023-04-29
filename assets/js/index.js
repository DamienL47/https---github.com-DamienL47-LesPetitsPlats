import { recipesDatas } from "./template.js"

async function getRecipes() {
    const response = await fetch('../../data/recipes.json');
    const data = await response.json();
    const recipes = data.recipes
    // console.log(recipes);

    return recipes;
}

function displayDataRecipes(recipes) {
    const displayArticle = document.getElementById('recipesDisplay');

    recipes.forEach((recipe) => {
        const recipeModel = recipesDatas(recipe);
        const recipeCardDOM = recipeModel.getRecipeCard();
        displayArticle.appendChild(recipeCardDOM);
    });
}

async function init() {
    const recipes = await getRecipes()
    displayDataRecipes(recipes)
}

init();