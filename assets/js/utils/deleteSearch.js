// import du fichier pour l'affichage des recettes
import { displayDataRecipes } from "../features/displayRecipes.js"
import { formatName } from "./formatting.js";
import { recipesFilter } from '../features/globalSearch.js';

// fonction de suppression des tags de recherche et mise à jour des recettes
function deleteSearch(recipes, array) {
    document.addEventListener('click', function(e) {
        const target = e.target.closest('.fa-circle-xmark');
        if(target) {
            const tag = target.parentElement.textContent;
            const div = target.parentElement.parentElement;
            
            array.forEach((ingredient, index) => {
                if(formatName(ingredient).includes(formatName(tag))) {
                    index = array.indexOf(ingredient);
                    array.splice(index, 1);
                    div.remove();
                    if(recipesFilter.length > 0) {
                        displayDataRecipes(recipesFilter, array);
                    } else if (array.length > 0){
                        displayDataRecipes(recipes, array);
                    } else {
                        displayDataRecipes(recipes);
                    }
                } else {
                    displayDataRecipes(recipes);
                }
            });           
        }
    });
}

export { deleteSearch };