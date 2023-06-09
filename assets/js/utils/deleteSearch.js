import { displayDataRecipes } from "../features/displayRecipes.js"

function deleteSearch(recipes, array) {
    document.addEventListener('click', function(e){
        const target = e.target.closest('.fa-circle-xmark');
        if(target) {
            const tag = target.parentElement.textContent;
            const div = target.parentElement.parentElement;
    
            for(let i = 0; i < array.length; i++) { 
                if(array[i].includes(tag[i])) {
                    array.pop(tag[i]);
                    div.remove();
                    displayDataRecipes(recipes, array[i]);
                } else {
                    displayDataRecipes(recipes);
                }              
            }
        }
    });
}

export { deleteSearch };