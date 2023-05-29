import { recipesDatas } from '../template.js';
// import { deleteSearch } from '../utils/deleteSearch.js';



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
        if(showRecipe) {
            
            const recipeModel = recipesDatas(recipe);
            const recipeCardDOM = recipeModel.getRecipeCard();
            displayArticle.appendChild(recipeCardDOM);
        }
    });  
    recipes.forEach((recipe) => {
        let showRecipe = false;
        for(let i = 0; i < recipe.length; i++) {
            for(let j = 0; j < filtersTags.length; j++) {
                if(recipe[i].appliance.toLowerCase().includes(filtersTags[j])) {
                    showRecipe = true;
                    break;
                }
            }
        }
        if(showRecipe) {    
            const recipeModel = recipesDatas(recipe);
            const recipeCardDOM = recipeModel.getRecipeCard();
            displayArticle.appendChild(recipeCardDOM);
        }
    });
    recipes.forEach((recipe) => {
        let showRecipe = false;
        for(let i = 0; i < recipe.ustensils.length; i++) {
            for(let j = 0; j < filtersTags.length; j++) {
                if(recipe.ustensils[i].toLowerCase().includes(filtersTags[j])) {
                    showRecipe = true;
                    break;
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
