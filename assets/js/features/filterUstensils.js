import { formatName } from '../utils/formatting.js';
import { deleteSearch } from '../utils/deleteSearch.js';
import { displayDataRecipes } from "./displayRecipes.js"
import { arrayTags, arraySave } from '../utils/arrayTags.js';

function filterUstensils(recipes) {

    let allUstensils = [];

    const inputUstensils = document.getElementById('ustencils');
    const containerUstensils = document.querySelector('.filterSearch__ustencils--container');
    const sectionFilterSave = document.getElementById('saveSearch__filter');
    
    function getUstensils(recipes) {
        recipes.forEach((ustensils) => {
            allUstensils = allUstensils.concat(ustensils.ustensils);
        });
    }
    
    function displayUstensils(ustensils) {
        ustensils.forEach((ustensil) => {
            const paragraph = document.createElement('p');
            if(containerUstensils.innerHTML.includes(ustensil)) {
                return;
            }
            paragraph.setAttribute('class', 'filterSearch__ustencils--p');
            paragraph.textContent = ustensil;
            containerUstensils.appendChild(paragraph);
        });
    }

    let filteredUstensils = [];
    
    function searchUstensils(){
        inputUstensils.addEventListener('input', (e) => {
            containerUstensils.innerHTML = "";
            const userSearch = formatName(e.target.value);
            filteredUstensils = allUstensils.filter(ustensil => 
                formatName(ustensil).match(userSearch)
            )
            if(filteredUstensils.length === 0) {
                const paragraph2 = document.createElement('p');
                paragraph2.setAttribute('class', 'filterSearch__ustencils--p');
                paragraph2.textContent = 'Aucun ustensile trouvé';
                containerUstensils.appendChild(paragraph2);
            } 
            displayUstensils(filteredUstensils);       
        });
    }

    function saveSearchUstensils(){
        inputUstensils.addEventListener('keydown', (e) => {
            if(e.key ==='Enter') {
                const userSearch = e.target.value;
                inputUstensils.value = "";
                if(inputUstensils.value === "") {
                    containerUstensils.innerHTML = "";
                    displayUstensils(allUstensils);
                    saveSearchUstensilsClick();
                }
                allUstensils.forEach((ustensil) => {
                    if (sectionFilterSave.innerHTML.includes(formatName(userSearch)) || !filteredUstensils.includes(ustensil)) {
                        return;
                    } 
                    arrayTags(arraySave, ustensil);
                    // arraySave.push(ustensil);
                    const saveSearch__container = document.createElement('div');
                    const fillUstensil = document.createElement('p');
                    
                    saveSearch__container.setAttribute('class', 'filterSearch__ustensilsSave--container');
                    fillUstensil.setAttribute('class', 'filterSearch__ustensil--save');
                    fillUstensil.innerHTML = `${userSearch} <i class="fa-regular fa-circle-xmark"></i>`;                
                    sectionFilterSave.appendChild(saveSearch__container); 
                    saveSearch__container.appendChild(fillUstensil); 
                });
                displayDataRecipes(recipes, filteredUstensils);
            }
        });
    }
    function saveSearchUstensilsClick(){
        const pUstensils = document.querySelectorAll('.filterSearch__ustencils--p');
        pUstensils.forEach((pUstensil) => {
            pUstensil.addEventListener('click', (e) => {
                const userSearch = e.target.textContent;
                allUstensils.forEach(() => {
                    if (sectionFilterSave.innerHTML.includes(userSearch)) {
                        return;
                    } 
                    arrayTags(arraySave, userSearch);
                    // arraySave.push(userSearch);
                    const saveSearch__container = document.createElement('div');
                    const fillUstensil = document.createElement('p');
                    
                    saveSearch__container.setAttribute('class', 'filterSearch__ustensilsSave--container');
                    fillUstensil.setAttribute('class', 'filterSearch__ustensil--save');
                    fillUstensil.innerHTML = `${userSearch} <i class="fa-regular fa-circle-xmark"></i>`;                
                    sectionFilterSave.appendChild(saveSearch__container); 
                    saveSearch__container.appendChild(fillUstensil); 
                });
                displayDataRecipes(recipes, arraySave);
            });
        });
    }

    getUstensils(recipes);
    displayUstensils(allUstensils);
    searchUstensils();
    saveSearchUstensils();
    saveSearchUstensilsClick();
    deleteSearch(recipes, arraySave);
}
export { filterUstensils };