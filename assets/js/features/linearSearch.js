import { displayDataRecipes } from "./displayRecipes.js"
import { formatName } from "../utils/formatting.js"

function linearSearch(recipes) {
    const inputSearch = document.getElementById('searchBar');
    const emptyRecipe = document.getElementById('filterSearch');
    const h3 = document.createElement('h3');

    inputSearch.addEventListener('input', (e) => {
        let userSearch = formatName(e.target.value);
        let recipesFilter = [];
        if (userSearch.length > 2) {
            for (let i = 0; i < recipes.length; i++) {
                if (formatName(recipes[i].name).includes(formatName(userSearch))) {
                    recipesFilter.push(recipes[i]);
                }
            }
            for (let i = 0; i < recipes.length; i++) {
                for (let j = 0; j < recipes[i].ingredients.length; j++) {
                    if (formatName(recipes[i].ingredients[j].ingredient).includes(formatName(userSearch))) {
                        recipesFilter.push(recipes[i]);
                    }
                }
            }
            for (let i = 0; i < recipes.length; i++) {
                if (formatName(recipes[i].description).includes(formatName(userSearch))) {
                    recipesFilter.push(recipes[i]);
                }
            }
            for (let i = 0; i < recipes.length; i++) {
                if (formatName(recipes[i].appliance).includes(formatName(userSearch))) {
                    recipesFilter.push(recipes[i]);
                }
            }
            for (let i = 0; i < recipes.length; i++) {
                for (let j = 0; j < recipes[i].ustensils.length; j++) {
                    if (formatName(recipes[i].ustensils[j]).includes(formatName(userSearch))) {
                        recipesFilter.push(recipes[i]);
                    }
                }
            }   
            displayDataRecipes(recipesFilter);
            
        } else {
            displayDataRecipes(recipes);
        }
        if (recipesFilter.length == 0) {
            h3.setAttribute('class', 'recipesDisplay__h3');
            h3.textContent = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.';
            emptyRecipe.appendChild(h3);    
        } 
        if (recipesFilter.length == 0 && userSearch.length < 3) {
            emptyRecipe.removeChild(h3);
        } 
    });
}

export { linearSearch };