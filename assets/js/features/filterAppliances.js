import { formatName } from '../utils/formatting.js';
import { deleteSearch } from '../utils/deleteSearch.js';
import { displayDataRecipes } from "./displayRecipes.js"

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
        });
    }

    let filteredAppliancesClick = [];
    function saveSearchAppliances(){
        inputAppliances.addEventListener('keydown', (e) => {
            if(e.key ==='Enter') {
                const userSearch = e.target.value;
                inputAppliances.value = "";
                if(inputAppliances.value === "") {
                    filteredAppliancesClick.push(userSearch);
                    containerAppliances.innerHTML = "";
                    displayAppliances(allAppliances);
                }
                allAppliances.forEach((appliance) => {
                    if (sectionFilterSave.innerHTML.includes(formatName(userSearch)) || !filteredAppliances.includes(appliance)) {
                        return;
                    } 
                    const saveSearch__container = document.createElement('div');
                    const fillAppliance = document.createElement('p');
                    
                    saveSearch__container.setAttribute('class', 'filterSearch__appareilsSave--container');
                    fillAppliance.setAttribute('class', 'filterSearch__appareil--save');
                    fillAppliance.innerHTML = `${userSearch} <i class="fa-regular fa-circle-xmark"></i>`;                
                    sectionFilterSave.appendChild(saveSearch__container); 
                    saveSearch__container.appendChild(fillAppliance); 
                });
                displayDataRecipes(recipes, filteredAppliances);
            }
        });
        const pAppliances = document.querySelectorAll('.filterSearch__appareils--p');
        pAppliances.forEach((pAppliance) => {
            pAppliance.addEventListener('click', (e) => {
                const userClickAppliance = e.target.textContent;
                filteredAppliancesClick.push(userClickAppliance.toLowerCase());
                allAppliances.forEach(() => {
                    if (sectionFilterSave.innerHTML.includes(userClickAppliance)) {
                        return;
                    } 
                    const saveSearch__container = document.createElement('div');
                    const fillAppliance = document.createElement('p');
                    
                    saveSearch__container.setAttribute('class', 'filterSearch__appareilsSave--container');
                    fillAppliance.setAttribute('class', 'filterSearch__appareil--save');
                    fillAppliance.innerHTML = `${userClickAppliance} <i class="fa-regular fa-circle-xmark"></i>`;                
                    sectionFilterSave.appendChild(saveSearch__container); 
                    saveSearch__container.appendChild(fillAppliance); 
                });
                displayDataRecipes(recipes, filteredAppliancesClick);
            });
        });
    }


    getAppliances(recipes);
    displayAppliances(allAppliances);
    searchAppliances();
    saveSearchAppliances();
    deleteSearch(recipes, filteredAppliancesClick);
}

export { filterAppliances }