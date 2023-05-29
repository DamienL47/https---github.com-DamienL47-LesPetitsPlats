import { formatName } from "./formatting.js";
import { displayDataRecipes } from "../features/displayRecipes.js"

function deleteSearch(recipes, array) {
    const sectionFilterSave = document.getElementById('saveSearch__filter');
    sectionFilterSave.addEventListener('click', (e) => {
        const btnDelete = e.target;
        const tag = btnDelete.parentElement.textContent;
        const div = btnDelete.parentElement.parentElement;
        if (btnDelete.classList.contains('fa-circle-xmark')) {
            for(let i = 0; i < array.length; i++) {
                if(formatName(array[i]).includes(formatName(tag))) {
                    array.pop(tag);
                    div.remove();
                    displayDataRecipes(recipes, array);
                } else {
                    displayDataRecipes(recipes);
                }
            }
        }
        
    }); 
}

export { deleteSearch };