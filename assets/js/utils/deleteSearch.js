
function deleteSearch(tag, selected) {
    const sectionFilterSave = document.getElementById('saveSearch__filter');
    sectionFilterSave.addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-circle-xmark')) {
            const deleteIngredient = e.target.parentElement;
            const div = deleteIngredient.parentElement;
            div.remove();
            const recipes = document.querySelectorAll('.recipesDisplay__article');
            recipes.forEach((recipe) => {
                if(!formatName(tag).match(formatName(selected))) {
                    recipe.style.display = 'block';
                } else {
                    recipe.style.display = 'none';
                }           
            });
        }
    }); 
}

const _deleteSearch = deleteSearch;
export { _deleteSearch as deleteSearch };