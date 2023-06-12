
import { formatName } from '../utils/formatting.js';
import { displayDataRecipes } from "./displayRecipes.js";
import { deleteSearch } from '../utils/deleteSearch.js';

function filterIngredients(recipes) {

    let inputIngredients = document.getElementById('ingredients');
    const containerIngredients = document.querySelector('.filterSearch__ingredients--container');
    const sectionFilterSave = document.getElementById('saveSearch__filter');

    let allIngredients = [];
    let uniqIngredients;

    function getIngredients(recipes) {
        for(let i = 0; i < recipes.length; i++) {
            for(let j = 0; j < recipes[i].ingredients.length; j++) {
                allIngredients.push(recipes[i].ingredients[j].ingredient);
                uniqIngredients = [...new Set(allIngredients)]
            }
        }
    }

    function displayIngredients(ingredients) {         
        ingredients.forEach((ingredient) => {  
            const paragraph = document.createElement('p');
            paragraph.setAttribute('class', 'filterSearch__ingredients--p');
            paragraph.textContent = ingredient;
            containerIngredients.appendChild(paragraph);
        });
    }

    let filteredIngredients = [];

    function searchIngredients(){
        inputIngredients.addEventListener('input', (e) => {
            const userSearch = formatName(e.target.value);
            if(userSearch.length > 2) {
                containerIngredients.innerHTML = "";
            }
            filteredIngredients = uniqIngredients.filter(ingredient => 
                formatName(ingredient).match(userSearch)
            ) 
            if(filteredIngredients.length === 0 && userSearch.length > 2) {
                const paragraph = document.createElement('p');
                paragraph.setAttribute('class', 'filterSearch__ingredients--p');
                paragraph.textContent = 'Aucun ingrédient trouvé';
                containerIngredients.appendChild(paragraph);
            } 
            displayIngredients(filteredIngredients);  
        });     
    }
    
    let arrayIngredientsSave = [];
    
    function saveSearchIngredient() {
        inputIngredients.addEventListener('keydown', (e) => {        
            if(e.key ==='Enter') {
                const userSearch = e.target.value;
                inputIngredients.value = "";
                if(inputIngredients.value === "") {
                    containerIngredients.innerHTML = "";
                    displayIngredients(uniqIngredients);
                }
                allIngredients.forEach((ingredient) => {
                    if (sectionFilterSave.innerHTML.includes(userSearch) || sectionFilterSave.innerHTML.includes(formatName(ingredient))) {
                        return;
                    }
                    arrayIngredientsSave.push(ingredient);
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
                allIngredients.forEach((ingredient) => {
                    if (arrayIngredientsSave.includes(ingredient.ingredient) || sectionFilterSave.innerHTML.includes(userSearch)) {
                        return;
                    }
                    arrayIngredientsSave.push(userSearch);
                    displayTagFilter(userSearch);
                });     
            });
        });
    }
    function displayTagFilter(paramSearch) {
        const saveSearch__container = document.createElement('div');
        const fillIngredient = document.createElement('p');
        
        saveSearch__container.setAttribute('class', 'filterSearch__ingredientsSave--container');
        fillIngredient.setAttribute('class', 'filterSearch__ingredients--save');
        fillIngredient.innerHTML = `${paramSearch} <i class="fa-regular fa-circle-xmark"></i>`;                
        sectionFilterSave.appendChild(saveSearch__container); 
        saveSearch__container.appendChild(fillIngredient);

        deleteSearch(recipes, arrayIngredientsSave);
        displayDataRecipes(recipes, arrayIngredientsSave);
    }
    
    getIngredients(recipes);
    displayIngredients(uniqIngredients);
    searchIngredients();
    saveSearchIngredient(); 
    saveSearchIngredientClick();
}

export { filterIngredients }