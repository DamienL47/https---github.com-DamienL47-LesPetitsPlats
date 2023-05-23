import { recipesDatas } from '../template.js';

function linearSearch(recipes) {
    console.log(recipes)
    const inputSearch = document.getElementById('searchBar');
    inputSearch.addEventListener('input', (e) => {
        const searchValue = e.target.value.toLowerCase();
        for(let i = 0; i < recipes.length; i++) {
            if(recipes[i].name.toLowerCase().includes(searchValue) 
            || recipes[i].description.toLowerCase().includes(searchValue) 
            || recipes[i].appliance.toLowerCase().includes(searchValue)) {
                const displayArticle = document.getElementById('recipesDisplay');
                displayArticle.innerHTML = "";
                
                const recipeModel = recipesDatas(recipes);
                const recipeCardDOM = recipeModel.getRecipeCard();
                displayArticle.appendChild(recipeCardDOM);
            }
        }
    //     const searchValue = e.target.value.toLowerCase();
    //     const recipesFilter = recipes.filter((recipe) => {
    //         return recipe.name.toLowerCase().includes(searchValue);
    //     });
    //     displayDataRecipes(recipesFilter);
    });
}

export { linearSearch };