import { formatName } from "./formatting.js";
import { displayDataRecipes } from "../features/displayRecipes.js"
import { filterIngredients } from "../features/filterIngredients.js";



function deleteSearch(recipes, array) {
    const sectionFilterSave = document.getElementById('saveSearch__filter');
    sectionFilterSave.addEventListener('click', (e) => {
        const btnDelete = e.target;
        const tag = btnDelete.parentElement.textContent;
        if(!btnDelete){
            return;
        } 
        if (btnDelete.classList.contains('fa-circle-xmark')) {
            console.log(array);
            for(let i = 0; i < array.length; i++) {
                if(formatName(array[i]).includes(formatName(tag))) {
                    array.pop(tag);
                    btnDelete.parentElement.remove();
                    displayDataRecipes(recipes, array);
                } else {
                    displayDataRecipes(recipes);
                }
            }
        }
        
    }); 
}

export { deleteSearch };