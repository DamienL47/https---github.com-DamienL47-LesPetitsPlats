import { recipesDatas } from '../template.js';
import { deleteSearch } from '../utils/deleteSearch.js';



//affichage des recettes 
function displayDataRecipes(recipes, filtersTags) {;
   
    const displayArticle = document.getElementById('recipesDisplay');
    displayArticle.innerHTML = "";
    
    if(!filtersTags || filtersTags.length === 0) {
        recipes.forEach((recipe) => {
            const recipeModel = recipesDatas(recipe);
            const recipeCardDOM = recipeModel.getRecipeCard();
            displayArticle.appendChild(recipeCardDOM);
        });
        return;
    } 
    recipes.forEach((recipe) => {
        let showRecipe = false;
        for(let i = 0; i < recipe.ingredients.length; i++) {
            for(let j = 0; j < filtersTags.length; j++) {
                if(recipe.ingredients[i].ingredient.toLowerCase().includes(filtersTags[j])) {
                    showRecipe = true;
                    break;
                }
            }
        }
        if(!showRecipe) {   
            for(let k = 0; k < filtersTags.length; k++) {
                if(recipe.appliance.includes(filtersTags[k])) {
                    showRecipe = true;
                    break;
                }
            }
            
            for(let l = 0; l < recipe.ustensils.length; l++) {
                if(recipe.ustensils[l].toLowerCase().includes(filtersTags[l])) {
                    showRecipe = true;
                }
            }
        }
        if(showRecipe) {
            const recipeModel = recipesDatas(recipe);
            const recipeCardDOM = recipeModel.getRecipeCard();
            displayArticle.appendChild(recipeCardDOM);
        }
    });  
}

const _displayDataRecipes = displayDataRecipes;
export { _displayDataRecipes as displayDataRecipes };
