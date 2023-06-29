import { displayDataRecipes } from "./features/displayRecipes.js";
import { filterIngredients } from "./features/filterIngredients.js";
import { filterAppliances } from "./features/filterAppliances.js";
import { filterUstensils } from "./features/filterUstensils.js";
import { globalSearch } from "./features/globalSearch.js";

//get data from json file
async function getRecipes() {
    const response = await fetch('../../data/recipes.json');
    const data = await response.json();
    var recipes = data.recipes;

    return recipes;
}

//main function
function main() {
    getRecipes()
    .then((recipes) => {
        displayDataRecipes(recipes);
        filterIngredients(recipes);
        filterAppliances(recipes);
        filterUstensils(recipes);
        globalSearch(recipes);
    });
}

main();