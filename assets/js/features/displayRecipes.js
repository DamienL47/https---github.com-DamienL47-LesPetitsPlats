import { recipesDatas } from '../template.js';
import { formatName } from '../utils/formatting.js';

//affichage des recettes 
function displayDataRecipes(recipes, filtersTags) {;

    const displayArticle = document.getElementById('recipesDisplay');
    displayArticle.innerHTML = "";

    const displayedRecipes = new Set();

    if(!filtersTags || filtersTags.length === 0) {
        recipes.forEach((recipe) => {
            const recipeModel = recipesDatas(recipe);
            const recipeCardDOM = recipeModel.getRecipeCard();
            displayArticle.appendChild(recipeCardDOM);
            displayedRecipes.add(recipe.name);
        });
    } 
    if(filtersTags){
        filtersTags.forEach((tag) => {
            recipes.forEach((recipe) => {
                recipe.ingredients.forEach((ingredient) => {
                    if(formatName(ingredient.ingredient).includes(formatName(tag))) {
                        if(displayedRecipes.has(recipe.name)) {
                            return;
                        }
                        const recipeModel = recipesDatas(recipe);
                        const recipeCardDOM = recipeModel.getRecipeCard();
                        displayArticle.appendChild(recipeCardDOM); 
                        displayedRecipes.add(recipe.name);   
                    }
                });
            });
            recipes.forEach((recipe) => {
                if(formatName(recipe.appliance).includes(formatName(tag))) {
                    if(displayedRecipes.has(recipe.name)) {
                        return;
                    }
                    const recipeModel = recipesDatas(recipe);
                    const recipeCardDOM = recipeModel.getRecipeCard();
                    displayArticle.appendChild(recipeCardDOM);
                    displayedRecipes.add(recipe.name);
                }
            });
            recipes.forEach((recipe) => {
                recipe.ustensils.forEach((ustensil) => {
                    if(formatName(ustensil).includes(formatName(tag))) {
                        if(displayedRecipes.has(recipe.name)) {
                            return;
                        }
                        const recipeModel = recipesDatas(recipe);
                        const recipeCardDOM = recipeModel.getRecipeCard();
                        displayArticle.appendChild(recipeCardDOM);
                        displayedRecipes.add(recipe.name);
                    }
                });
            });
        });
    }
}

const _displayDataRecipes = displayDataRecipes;
export { _displayDataRecipes as displayDataRecipes };