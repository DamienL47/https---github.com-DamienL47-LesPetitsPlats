
import { formatName } from '../utils/formatting.js';
import { displayDataRecipes } from "./displayRecipes.js";
import { deleteSearch } from '../utils/deleteSearch.js';

function filterIngredients(recipes) {

    let inputIngredients = document.getElementById('ingredients');
    const containerIngredients = document.querySelector('.filterSearch__ingredients--container');
    const sectionFilterSave = document.getElementById('saveSearch__filter');

    let allIngredients = [];

    function getIngredients(recipes) {
        recipes.forEach((ingredients) => {
            allIngredients = allIngredients.concat(ingredients.ingredients);
        });

    }

    function displayIngredients(ingredients) {         
        ingredients.forEach((ingredient) => {  
            const paragraph = document.createElement('p');
            if(containerIngredients.innerHTML.includes(ingredient.ingredient)) {
                return;
            }
            paragraph.setAttribute('class', 'filterSearch__ingredients--p');
            paragraph.textContent = ingredient.ingredient;
            containerIngredients.appendChild(paragraph);
        });
    }

    let filteredIngredients = [];

    function searchIngredients(){
        inputIngredients.addEventListener('input', (e) => {
            containerIngredients.innerHTML = "";
            const userSearch = formatName(e.target.value);
            filteredIngredients = allIngredients.filter(ingredient => 
                formatName(ingredient.ingredient).match(userSearch)
            ) 
            if(filteredIngredients.length === 0) {
                const paragraph2 = document.createElement('p');
                paragraph2.setAttribute('class', 'filterSearch__ingredients--p');
                paragraph2.textContent = 'Aucun ingrédient trouvé';
                containerIngredients.appendChild(paragraph2);
            } 
            displayIngredients(filteredIngredients);  
        });     
    }
    
    let arrayIngredientsSave = [];
    
    function saveSearchIngredient() {
        inputIngredients.addEventListener('keydown', (e) => {        
            if(e.key ==='Enter') {
                const userSearch = formatName(e.target.value);
                inputIngredients.value = "";
                if(inputIngredients.value === "") {
                    displayIngredients(allIngredients);
                }
                allIngredients.forEach((ingredient) => {
                    if (sectionFilterSave.innerHTML.includes(userSearch) || sectionFilterSave.innerHTML.includes(ingredient.ingredient)) {
                        return;
                    } 
                    arrayIngredientsSave.push(userSearch);
                    displayTagFilter(userSearch);
                });
            }
        });
    }
    function saveSearchIngredientClick() {
        const pIngredients = document.querySelectorAll('.filterSearch__ingredients--p');
        pIngredients.forEach((pIngredient) => {
            pIngredient.addEventListener('click', (e) => {
                const userSearch = e.target.textContent;
                arrayIngredientsSave.push(userSearch);
                allIngredients.forEach((ingredient) => {
                    if (arrayIngredientsSave.includes(formatName(ingredient.ingredient)) || sectionFilterSave.innerHTML.includes(userSearch)) {
                        return;
                    } 
                    displayTagFilter(userSearch);
                });     
            });
        });
    }
    function displayTagFilter(userSearch) {
        const saveSearch__container = document.createElement('div');
        const fillIngredient = document.createElement('p');
        
        saveSearch__container.setAttribute('class', 'filterSearch__ingredientsSave--container');
        fillIngredient.setAttribute('class', 'filterSearch__ingredients--save');
        fillIngredient.innerHTML = `${userSearch} <i class="fa-regular fa-circle-xmark"></i>`;                
        sectionFilterSave.appendChild(saveSearch__container); 
        saveSearch__container.appendChild(fillIngredient); 

        displayDataRecipes(recipes, arrayIngredientsSave);
        deleteSearch(recipes, arrayIngredientsSave, fillIngredient, saveSearch__container);
    }
    
    
    getIngredients(recipes);
    displayIngredients(allIngredients);
    searchIngredients();
    saveSearchIngredient(); 
    saveSearchIngredientClick();
}

export { filterIngredients }