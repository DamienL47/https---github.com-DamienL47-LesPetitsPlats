import { recipesDatas } from '../template.js';
import { formatName } from '../utils/formatting.js';

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
    } 
    if(filtersTags){
        filtersTags.forEach((tag) => {
            recipes.forEach((recipe) => {
                recipe.ingredients.forEach((ingredient) => {
                    if(formatName(ingredient.ingredient).includes(formatName(tag))) {
                        if(recipes.name === recipe.name) {
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
}
    



// function testAppliance(recipes, arrayAppliance) {
//     recipes.forEach((recipe) => {
//         arrayAppliance.forEach((tag) => {
//             if(formatName(recipe.appliance).includes(formatName(tag))) {
             
                // const recipeModel = recipesDatas(recipe);
                // const recipeCardDOM = recipeModel.getRecipeCard();
                // displayArticle.appendChild(recipeCardDOM);
//             }
//         });
//     });
// }

// function testUstensils(recipes, arrayUstensil) {
//     recipes.forEach((recipe) => {
//         arrayUstensil.forEach((tag) => {
//             recipe.ustensils.forEach((ustensil) => {
//                 if(formatName(ustensil).includes(formatName(tag))) {
                    
//                     const recipeModel = recipesDatas(recipe);
//                     const recipeCardDOM = recipeModel.getRecipeCard();
//                     displayArticle.appendChild(recipeCardDOM);
//                 }    
//             });
//         });
//     });
// }

const _displayDataRecipes = displayDataRecipes;
export { _displayDataRecipes as displayDataRecipes };
