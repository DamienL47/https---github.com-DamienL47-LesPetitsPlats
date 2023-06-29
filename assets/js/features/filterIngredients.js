
import { formatName } from '../utils/formatting.js';
import { displayDataRecipes } from "./displayRecipes.js";
import { deleteSearch } from '../utils/deleteSearch.js';
import { arrayTags, arraySave } from '../utils/arrayTags.js';
import { recipesFilter } from './globalSearch.js';

function filterIngredients(recipes) {

    let inputIngredients = document.getElementById('ingredients');
    const containerIngredients = document.querySelector('.filterSearch__ingredients--container');
    const sectionFilterSave = document.getElementById('saveSearch__filter');
    const sectionRecipes = document.getElementById('recipesDisplay');

    let allIngredients = [];
    let uniqIngredients;
    // get all ingredients from recipes
    function getIngredients(recipes) {
        for(let i = 0; i < recipes.length; i++) {
            for(let j = 0; j < recipes[i].ingredients.length; j++) {
                allIngredients.push(recipes[i].ingredients[j].ingredient);
                uniqIngredients = [...new Set(allIngredients)]
            }
        }
    }
    // display all ingredients
    function displayIngredients(ingredients) {         
        ingredients.forEach((ingredient) => {  
            const paragraph = document.createElement('p');
            paragraph.setAttribute('class', 'filterSearch__ingredients--p');
            paragraph.textContent = ingredient;
            containerIngredients.appendChild(paragraph);
        });
    }

    let filteredIngredients = [];
    // save ingredients in array
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
            if(userSearch.length === 0) {
                containerIngredients.innerHTML = "";
                displayIngredients(uniqIngredients);
            }
            saveSearchIngredientClick();
            saveSearchIngredient();
        });    
    }
    // save ingredients in tag
    function saveSearchIngredient() {
        inputIngredients.addEventListener('keydown', (e) => {        
            if(e.key ==='Enter') {
                const userSearch = e.target.value;
                inputIngredients.value = "";
                if(inputIngredients.value === "") {
                    containerIngredients.innerHTML = "";
                    displayIngredients(uniqIngredients);
                    saveSearchIngredientClick();
                }
                allIngredients.forEach((ingredient) => {
                    if (sectionFilterSave.innerHTML.includes(userSearch) || sectionFilterSave.innerHTML.includes(formatName(ingredient)) || formatName(userSearch) != formatName(ingredient)) {
                        return;
                    }
                    arrayTags(arraySave, ingredient)
                    displayTagFilter(userSearch);                                           
                });
            }
        });        
    }
    // save ingredients in tag when click
    function saveSearchIngredientClick() {
        const pIngredients = document.querySelectorAll('.filterSearch__ingredients--p');
        pIngredients.forEach((pIngredient) => {
            pIngredient.addEventListener('click', (event) => {
                const userSearch = event.target.textContent;
                allIngredients.forEach((ingredient) => {
                    saveSearchIngredient();
                    if (arraySave.includes(ingredient.ingredient) || sectionFilterSave.innerHTML.includes(userSearch)) {
                        return;
                    }
                    arrayTags(arraySave, userSearch)
                    displayTagFilter(userSearch);
                });     
            });
        });
    }
    // display tag ingredients
    function displayTagFilter(paramSearch) {
        const fillIngredient = document.createElement('p');
        const saveSearch__container = document.createElement('div');
        
        saveSearch__container.setAttribute('class', 'filterSearch__ingredientsSave--container');
        fillIngredient.setAttribute('class', 'filterSearch__ingredients--save');
        fillIngredient.innerHTML = `${paramSearch} <i class="fa-regular fa-circle-xmark"></i>`; 
        sectionFilterSave.appendChild(saveSearch__container); 
        saveSearch__container.appendChild(fillIngredient);
        if(recipesFilter.length > 0) {
            displayDataRecipes(recipesFilter, arraySave);
        } else if(recipesFilter.length === 0) {
            displayDataRecipes(recipes, arraySave);
        }
        if(sectionRecipes.innerHTML === "") {
            const h3 = document.createElement('h3');
            h3.setAttribute('class', 'recipesDisplay__h3');
            h3.textContent = 'Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.';
            sectionRecipes.appendChild(h3); 
        } 
        if (!sectionRecipes.innerHTML === "") {
            sectionRecipes.removeChild(h3);
        }  
        displayIngredients(uniqIngredients);
        saveSearchIngredient(); 
        saveSearchIngredientClick();
    }

    
    getIngredients(recipes);
    displayIngredients(uniqIngredients);
    searchIngredients();
    saveSearchIngredient(); 
    saveSearchIngredientClick();
    deleteSearch(recipes, arraySave);
}   

export { filterIngredients }