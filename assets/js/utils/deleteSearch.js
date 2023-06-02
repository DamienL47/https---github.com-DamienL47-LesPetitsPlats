import { formatName } from "./formatting.js";
import { displayDataRecipes } from "../features/displayRecipes.js"

function deleteSearch(recipes, array, tag, div) {
    const sectionFilterSave = document.getElementById('saveSearch__filter');
    sectionFilterSave.addEventListener('click', (e) => {
        const btnDelete = e.target;
        tag = btnDelete.parentElement.textContent;
        div = btnDelete.parentElement.parentElement;

        if (btnDelete.classList.contains('fa-circle-xmark')) {
            div.remove();
            if(array.length > 0) {
                displayDataRecipes(array);
            } else {
                displayDataRecipes(recipes);
            }
        }

        // for(let i = 0; i < array.length; i++) {
        //     if (btnDelete.classList.contains('fa-circle-xmark')) {
        //         console.log(array[i]);
        //         if(array[i].includes(tag)) {
        //             array.pop(tag);
        //             div.remove();
        //             displayDataRecipes(recipes, array);
        //         } else {
        //             displayDataRecipes(recipes);
        //         }
        //     }
        // }    
    }); 
}

export { deleteSearch };