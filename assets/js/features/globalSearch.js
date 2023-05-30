import { displayDataRecipes } from "./displayRecipes.js";
import { formatName } from "../utils/formatting.js";

//fonction de recherche globale

function globalSearch(recipes) {
    console.log(recipes);
    const searchInput = document.getElementById('searchBar');
    const recipeEmpty = document.getElementById('filterSearch');
    const h3 = document.createElement('h3');

    searchInput.addEventListener('input', (e) => {
        const searchValue = formatName(e.target.value);
        let recipesFilter = [];
        if (searchValue.length > 2) {
            recipes.forEach((recipe) => {
                recipe.ingredients.forEach((ingredient) => {
                    if (formatName(ingredient.ingredient).includes(searchValue)) {
                        recipesFilter.push(recipe);
                    }
                });
                recipe.ustensils.forEach((ustensil) => {
                    if (formatName(ustensil).includes(searchValue)) {
                        recipesFilter.push(recipe);
                    }
                });
                if (formatName(recipe.name).includes(searchValue) || formatName(recipe.description).includes(searchValue) || formatName(recipe.appliance).includes(searchValue)) {
                    recipesFilter.push(recipe);
                }
            }); 
            displayDataRecipes(recipesFilter);
        } else {
            displayDataRecipes(recipes);
        }
        if(recipesFilter.length == 0) {
            h3.setAttribute('class', 'recipesDisplay__h3');
            h3.textContent = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.';
            recipeEmpty.appendChild(h3); 
        }
        if(searchInput.length < 3 && recipesFilter.length === 0) {
            recipeEmpty.removeChild(h3);
        }
        
    });
}
export { globalSearch };