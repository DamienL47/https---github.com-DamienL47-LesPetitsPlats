import { recipesDatas } from "./template.js"
import { filterIngredients } from "./features/filterIngredients.js"
import { filterAppliances } from "./features/filterAppliances.js"
import { filterUstensils } from "./features/filterUstensils.js"

//fetch des datas 
async function getRecipes() {
    const response = await fetch('../../data/recipes.json');
    const data = await response.json();
    var recipes = data.recipes;

    return recipes;
}
//affichage des recettes 
function displayDataRecipes(recipes) {
    const displayArticle = document.getElementById('recipesDisplay');
    recipes
    .forEach((recipe) => {
        const recipeModel = recipesDatas(recipe);
        const recipeCardDOM = recipeModel.getRecipeCard();
        displayArticle.appendChild(recipeCardDOM);
    });  
}

function main() {
    getRecipes()
    .then((recipes) => {
        displayDataRecipes(recipes);
        filterIngredients(recipes);
        filterAppliances(recipes);
        filterUstensils(recipes);
    });
}

main();