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
 function testIngredient(recipes, arrayTags) {
    
    recipes.forEach((recipe) => {
        arrayTags.forEach((tag) => {
            recipe.ingredients.forEach((ingredient) => {
                if(formatName(ingredient.ingredient).includes(formatName(tag))) {
                    const recipeModel = recipesDatas(recipe);
                    const recipeCardDOM = recipeModel.getRecipeCard();
                    displayArticle.appendChild(recipeCardDOM); 
                }
            });
        });
    });
    
 }
 function testAppliance(recipes, arrayTags) {
    recipes.forEach((recipe) => {
        arrayTags.forEach((tag) => {
            if(formatName(recipe.appliance).includes(formatName(tag))) {
                const recipeModel = recipesDatas(recipe);
                const recipeCardDOM = recipeModel.getRecipeCard();
                displayArticle.appendChild(recipeCardDOM);
            }
        });
    });

 }
 function testUstensils(recipes, arrayTags) {
    recipes.forEach((recipe) => {
        arrayTags.forEach((tag) => {
            recipe.ustensils.forEach((ustensil) => {
                if(formatName(ustensil).includes(formatName(tag))) {
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
