// import des fichiers 
import { displayDataRecipes } from "./features/displayRecipes.js"
import { filterIngredients } from "./features/filterIngredients.js"
import { filterAppliances } from "./features/filterAppliances.js"
import { filterUstensils } from "./features/filterUstensils.js"

//fetch des datas 
async function getRecipes() {
    const response = await fetch('../../data/recipes.json');
    const data = await response.json();
    var recipes = data.recipes;

    return recipes;
}

// point d'entrée de l'application
function main() {
    getRecipes()
    .then((recipes) => {
        displayDataRecipes(recipes);
        filterIngredients(recipes);
        filterAppliances(recipes);
        filterUstensils(recipes);
    });
}
//initialisation de l'application
main();