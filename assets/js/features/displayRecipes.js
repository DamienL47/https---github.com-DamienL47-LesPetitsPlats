import { recipesDatas } from '../template.js';
import { formatName } from '../utils/formatting.js';

const displayArticle = document.getElementById('recipesDisplay');

//affichage des recettes 
function displayDataRecipes(recipes, arrayTags) {;
    
    displayArticle.innerHTML = "";

    recipes.forEach((recipe) => {
        const recipeModel = recipesDatas(recipe);
        const recipeCardDOM = recipeModel.getRecipeCard();
        displayArticle.appendChild(recipeCardDOM);
    });
    if(arrayTags) {
        displayArticle.innerHTML = "";

        testIngredient(recipes, arrayTags);
        testAppliance(recipes, arrayTags);
        testUstensils(recipes, arrayTags);      
    } 
}
function testIngredient(recipes, arrayIngredient) {   
    recipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            arrayIngredient.forEach((tag) => {
                if(formatName(ingredient.ingredient).includes(formatName(tag))) {
                    const recipeModel = recipesDatas(recipe);
                    const recipeCardDOM = recipeModel.getRecipeCard();
                    displayArticle.appendChild(recipeCardDOM); 
                }
            });
        });
    });  
}
function testAppliance(recipes, arrayAppliance) {
    recipes.forEach((recipe) => {
        arrayAppliance.forEach((tag) => {
            if(formatName(recipe.appliance).includes(formatName(tag))) {
                if(displayArticle.innerHTML.includes(recipe.appliance)){
                    return;
                }
                const recipeModel = recipesDatas(recipe);
                const recipeCardDOM = recipeModel.getRecipeCard();
                displayArticle.appendChild(recipeCardDOM);
            }
        });
    });
}
function testUstensils(recipes, arrayUstensil) {
    recipes.forEach((recipe) => {
        arrayUstensil.forEach((tag) => {
            recipe.ustensils.forEach((ustensil) => {
                if(formatName(ustensil).includes(formatName(tag))) {
                    if(displayArticle.innerHTML.includes(recipe.ustensils)){
                        return;
                    }
                    const recipeModel = recipesDatas(recipe);
                    const recipeCardDOM = recipeModel.getRecipeCard();
                    displayArticle.appendChild(recipeCardDOM);
                }    
            });
        });
    });
}

const _displayDataRecipes = displayDataRecipes;
export { _displayDataRecipes as displayDataRecipes };
