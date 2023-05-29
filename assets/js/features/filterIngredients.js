
import { formatName } from '../utils/formatting.js';
import { displayDataRecipes } from "./displayRecipes.js"
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

    let filteredIngredientClick = [];
    
    function saveSearchIngredient() {
        inputIngredients.addEventListener('keydown', (e) => {        
            if(e.key ==='Enter') {
                const userSearch = e.target.value;
                inputIngredients.value = "";
                if(inputIngredients.value === "") {
                    displayIngredients(allIngredients);
                    filteredIngredients.push(userSearch);
                }
                allIngredients.forEach((ingredient) => {
                    if (sectionFilterSave.innerHTML.includes(formatName(userSearch)) || !filteredIngredients.includes(ingredient)) {
                        return;
                    } 
                    const saveSearch__container = document.createElement('div');
                    const fillIngredient = document.createElement('p');
                    
                    saveSearch__container.setAttribute('class', 'filterSearch__ingredientsSave--container');
                    fillIngredient.setAttribute('class', 'filterSearch__ingredients--save');
                    fillIngredient.innerHTML = `${userSearch} <i class="fa-regular fa-circle-xmark"></i>`;                
                    sectionFilterSave.appendChild(saveSearch__container); 
                    saveSearch__container.appendChild(fillIngredient); 
                });
                displayDataRecipes(recipes, filteredIngredients);
            }
        });
        const pIngredients = document.querySelectorAll('.filterSearch__ingredients--p');
        pIngredients.forEach((pIngredient) => {
            pIngredient.addEventListener('click', (e) => {
                const userClick = e.target.textContent;
                filteredIngredientClick.push(userClick.toLowerCase());
                allIngredients.forEach(() => {
                    if (sectionFilterSave.innerHTML.includes(userClick)) {
                        return;
                    } 
                    const saveSearch__container = document.createElement('div');
                    const fillIngredient = document.createElement('p');
                    
                    saveSearch__container.setAttribute('class', 'filterSearch__ingredientsSave--container');
                    fillIngredient.setAttribute('class', 'filterSearch__ingredients--save');
                    fillIngredient.innerHTML = `${userClick} <i class="fa-regular fa-circle-xmark"></i>`;                
                    sectionFilterSave.appendChild(saveSearch__container); 
                    saveSearch__container.appendChild(fillIngredient); 
                });
                displayDataRecipes(recipes, filteredIngredientClick);       
            });
        });
    }

    getIngredients(recipes);
    displayIngredients(allIngredients);
    searchIngredients();
    saveSearchIngredient(); 
    deleteSearch(recipes, filteredIngredientClick);
    deleteSearch(recipes, filteredIngredients);

}

export { filterIngredients }