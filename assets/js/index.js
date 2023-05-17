import { recipesDatas } from "./template.js"
import { filterIngredients } from "./utils/filterIngredients.js"
import { filterAppliances } from "./utils/filterAppliances.js"
import { filterUstensils } from "./utils/filterUstensils.js"

//fetch des datas 
async function getRecipes() {
    const response = await fetch('../../data/recipes.json');
    const data = await response.json();
    var recipes = data.recipes;

    return recipes;
}
//affichage des recettes 
function displayDataRecipes(recipes) {
    const displayArticle = document.getElementById('recipesDisplay');
    recipes
    .forEach((recipe) => {
        const recipeModel = recipesDatas(recipe);
        const recipeCardDOM = recipeModel.getRecipeCard();
        displayArticle.appendChild(recipeCardDOM);
    });  
}

function main() {
    getRecipes()
    .then((recipes) => {
        displayDataRecipes(recipes);
        filterIngredients(recipes);
        filterAppliances(recipes);
        filterUstensils(recipes);
    });
}

function deleteSearch(tag, selected) {
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

main();