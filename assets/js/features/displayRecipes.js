import { recipesDatas } from '../template.js';

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

const _displayDataRecipes = displayDataRecipes;
export { _displayDataRecipes as displayDataRecipes };