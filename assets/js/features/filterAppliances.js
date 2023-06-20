import { formatName } from '../utils/formatting.js';
import { deleteSearch } from '../utils/deleteSearch.js';
import { displayDataRecipes } from "./displayRecipes.js"
import { arrayTags, arraySave } from '../utils/arrayTags.js';

function filterAppliances(recipes) {


    const inputAppliances = document.getElementById('appareils');
    const containerAppliances = document.querySelector('.filterSearch__appareils--container');
    const sectionFilterSave = document.getElementById('saveSearch__filter');

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
    
    function searchAppliances(){
        inputAppliances.addEventListener('input', (e) => {
            containerAppliances.innerHTML = "";
            const userSearch = formatName(e.target.value);
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
        });
    }

    function saveSearchAppliances(){
        inputAppliances.addEventListener('keydown', (e) => {
            if(e.key ==='Enter') {
                const userSearch = e.target.value;
                inputAppliances.value = "";
                if(inputAppliances.value === "") {
                    containerAppliances.innerHTML = "";
                    displayAppliances(allAppliances);
                    saveSearchAppliancesClick();
                }
                allAppliances.forEach((appliance) => {
                    if (sectionFilterSave.innerHTML.includes(formatName(userSearch)) || !arraySave.includes(appliance)) {
                        return;
                    } 
                    arrayTags(arraySave, appliance);
                    // arraySave.push(appliance)
                    const saveSearch__container = document.createElement('div');
                    const fillAppliance = document.createElement('p');
                    
                    saveSearch__container.setAttribute('class', 'filterSearch__appareilsSave--container');
                    fillAppliance.setAttribute('class', 'filterSearch__appareil--save');
                    fillAppliance.innerHTML = `${userSearch} <i class="fa-regular fa-circle-xmark"></i>`;                
                    sectionFilterSave.appendChild(saveSearch__container); 
                    saveSearch__container.appendChild(fillAppliance); 
                });
                displayDataRecipes(recipes, arraySave);
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
                    const saveSearch__container = document.createElement('div');
                    const fillAppliance = document.createElement('p');
                    
                    saveSearch__container.setAttribute('class', 'filterSearch__appareilsSave--container');
                    fillAppliance.setAttribute('class', 'filterSearch__appareil--save');
                    fillAppliance.innerHTML = `${userSearch} <i class="fa-regular fa-circle-xmark"></i>`;                
                    sectionFilterSave.appendChild(saveSearch__container); 
                    saveSearch__container.appendChild(fillAppliance); 
                });
                displayDataRecipes(recipes, arraySave);
                displayAppliances(allAppliances);
            });
        });
    }


    getAppliances(recipes);
    displayAppliances(allAppliances);
    searchAppliances();
    saveSearchAppliances();
    saveSearchAppliancesClick();
    deleteSearch(recipes, arraySave);
}

export { filterAppliances }