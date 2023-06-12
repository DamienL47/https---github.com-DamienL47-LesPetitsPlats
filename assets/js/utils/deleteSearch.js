// import du fichier pour l'affichage des recettes
import { displayDataRecipes } from "../features/displayRecipes.js"

// fonction de suppression des tags de recherche et mise à jour des recettes
function deleteSearch(recipes, array) {
    document.addEventListener('click', function(e){
        const target = e.target.closest('.fa-circle-xmark');
        if(target) {
            const tag = target.parentElement.textContent;
            const div = target.parentElement.parentElement;
    
            array.forEach((element, index) => {
                if(array[index].includes(tag[index])) {
                    array.slice(element[index], 1);
                    div.remove();
                    displayDataRecipes(recipes, array);
                } else {
                    displayDataRecipes(recipes);
                } 
            });
        }
    });
}

export { deleteSearch };