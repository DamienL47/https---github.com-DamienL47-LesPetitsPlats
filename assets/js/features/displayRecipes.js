import { recipesDatas } from '../template.js';



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
                    console.log(filtersTags[j] + ' ingredients');
                    showRecipe = true;
                    break;
                }
            }
        }
        if(!showRecipe) {
            
            for(let k = 0; k < filtersTags.length; k++) {
                if(recipe.appliance.includes(filtersTags[k])) {
                    console.log(filtersTags[k] + ' appliance');
                    showRecipe = true;
                    break;
                }
            }
            
            for(let l = 0; l < recipe.ustensils.length; l++) {
                if(recipe.ustensils[l].toLowerCase().includes(filtersTags[l])) {
                    console.log(filtersTags[l] + ' ustensils');
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


    // let filtersTagsIngredients = document.querySelectorAll('.filterSearch__ingredients--save');
    // let filtersTagsAppliance = document.querySelectorAll('.filterSearch__appareil--save');
    // let filtersTagsUstensils = document.querySelectorAll('.filterSearch__ustensil--save');
    
    // filtersTagsIngredients.forEach((ingredient) => {
    //     filtersTags.push(ingredient.textContent);
    // });
    // filtersTagsAppliance.forEach((appliance) => {
    //     filtersTags.push(appliance.textContent);
    // });
    // filtersTagsUstensils.forEach((ustensil) => {
    //     filtersTags.push(ustensil.textContent);
    // });
    // console.log(filtersTags);
  
    





















    // recipes
    // .forEach((recipe) => { 
        
    //     const recipeModel = recipesDatas(recipe);
    //     const recipeCardDOM = recipeModel.getRecipeCard();
    //     displayArticle.appendChild(recipeCardDOM);
    // });
