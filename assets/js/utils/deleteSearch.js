import { formatName } from '../utils/formatting.js';

function deleteSearch() {
    const sectionFilterSave = document.getElementById('saveSearch__filter');
    sectionFilterSave.addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-circle-xmark')) {
            const deleteIngredient = e.target.parentElement;
            const div = deleteIngredient.parentElement;
            div.remove();

            const tagFilter = Array.from(sectionFilterSave.children)
            .map((filter) => formatName(filter.textContent));

            const recipes = document.querySelectorAll('.recipesDisplay__article');
            recipes.forEach((recipe) => {
                const recipeTags = Array.from(recipe.querySelectorAll(`.recipeTags__tag`))
                .map((tag) => formatName(tag.textContent));
                if(tagFilter.some(filter => !recipeTags.includes(filter))) {
                    recipe.style.display = 'none';
                } else {
                    recipe.style.display = 'block';
                }           
            });
        }
    }); 
}

const _deleteSearch = deleteSearch;
export { _deleteSearch as deleteSearch };