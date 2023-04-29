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
    console.log(recipes);
    recipes.forEach((recipe) => {
        
    });
}

async function init() {
    const recipes = await getRecipes()
    displayDataRecipes(recipes)
}

init();