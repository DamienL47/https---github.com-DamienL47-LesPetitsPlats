// import du fichier pour l'affichage des recettes
import { displayDataRecipes } from "../features/displayRecipes.js"
import { formatName } from "./formatting.js";



// fonction de suppression des tags de recherche et mise à jour des recettes
function deleteSearch(recipes, array) {
    document.addEventListener('click', function(e) {
        const target = e.target.closest('.fa-circle-xmark');
        if(target) {
            const tag = target.parentElement.textContent;
            const div = target.parentElement.parentElement;
            console.log(array);
            if(array) {
                array.forEach((ingredient, index) => {
                    if(formatName(ingredient[index]).includes(formatName(tag))) {
                        array.splice(tag[index], 1);
                        console.log(array.splice(ingredient[index], 0));
                        div.remove();
                    }
                    displayDataRecipes(recipes, array);
                });
            }
        }
    });
}

export { deleteSearch };