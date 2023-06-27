import { formatName } from '../utils/formatting.js';
import { deleteSearch } from '../utils/deleteSearch.js';
import { displayDataRecipes } from "./displayRecipes.js"
import { arrayTags, arraySave } from '../utils/arrayTags.js';
import { recipesFilter } from './globalSearch.js';

function filterAppliances(recipes) {


    const inputAppliances = document.getElementById('appareils');
    const containerAppliances = document.querySelector('.filterSearch__appareils--container');
    const sectionFilterSave = document.getElementById('saveSearch__filter');
    const sectionRecipes = document.getElementById('recipesDisplay');

    let allAppliances = [];


    function getAppliances(recipes) {
        recipes.forEach((appliances) => {
            allAppliances = allAppliances.concat(appliances.appliance);
        });
    }

    function displayAppliances(appliances) {
        appliances.forEach((appliance) => {
            const paragraph = document.createElement('p');
            if(containerAppliances.innerHTML.includes(appliance)) {
                return;
            }
            paragraph.setAttribute('class', 'filterSearch__appareils--p');
            paragraph.textContent = appliance;
            containerAppliances.appendChild(paragraph);
        });
    }

    let filteredAppliances = [];
    
    function searchAppliances() {
        inputAppliances.addEventListener('input', (e) => {
            const userSearch = formatName(e.target.value);
            containerAppliances.innerHTML = "";
            filteredAppliances = allAppliances.filter(appliance => 
                formatName(appliance).match(userSearch)
                )
            if(filteredAppliances.length === 0) {
                const paragraph2 = document.createElement('p');
                paragraph2.setAttribute('class', 'filterSearch__appareils--p');
                paragraph2.textContent = 'Aucun appareil trouvé';
                containerAppliances.appendChild(paragraph2);
            } 
            displayAppliances(filteredAppliances); 
            saveSearchAppliancesClick();  
            saveSearchAppliances();
        });
    }

    function saveSearchAppliances(){
        inputAppliances.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') {
                const userSearch = e.target.value;
                inputAppliances.value = "";
                if(inputAppliances.value === "") {
                    containerAppliances.innerHTML = "";
                    displayAppliances(allAppliances);
                    saveSearchAppliancesClick();
                }
                allAppliances.forEach((appliance) => {
                    if (sectionFilterSave.innerHTML.includes(userSearch)) {
                        return;
                    } 
                    arrayTags(arraySave, appliance);
                    displayTagAppliances(userSearch);
                });
            }
        });
    }
    function saveSearchAppliancesClick(){
        const pAppliances = document.querySelectorAll('.filterSearch__appareils--p');
        pAppliances.forEach((pAppliance) => {
            pAppliance.addEventListener('click', (e) => {
                const userSearch = e.target.textContent;
                allAppliances.forEach(() => {
                    if (sectionFilterSave.innerHTML.includes(userSearch)) {
                        return;
                    } 
                    arrayTags(arraySave, userSearch);
                    displayTagAppliances(userSearch);
                });
            });
        });
    }

    function displayTagAppliances(paramSearch) {
        const saveSearch__container = document.createElement('div');
        const fillAppliance = document.createElement('p');
        
        saveSearch__container.setAttribute('class', 'filterSearch__appareilsSave--container');
        fillAppliance.setAttribute('class', 'filterSearch__appareil--save');
        fillAppliance.innerHTML = `${paramSearch} <i class="fa-regular fa-circle-xmark"></i>`;                
        sectionFilterSave.appendChild(saveSearch__container); 
        saveSearch__container.appendChild(fillAppliance); 
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
        displayAppliances(allAppliances);
        saveSearchAppliancesClick();
        saveSearchAppliances();
    }

    getAppliances(recipes);
    displayAppliances(allAppliances);
    searchAppliances();
    saveSearchAppliances();
    saveSearchAppliancesClick();
    deleteSearch(recipes, arraySave);
}

export { filterAppliances }