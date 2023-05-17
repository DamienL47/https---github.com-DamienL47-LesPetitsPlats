function filterAppliances(appliances) {


const inputAppliances = document.getElementById('appareils');
const containerAppliances = document.querySelector('.filterSearch__appareils--container');
const sectionFilterSave = document.getElementById('saveSearch__filter');
const displayArticle = document.getElementById('recipesDisplay');

let allAppliances = [];


function getAppliances(recipes) {
    recipes.forEach((appliances) => {
        allAppliances = allAppliances.concat(appliances.appliance);
    });
}

function formatName(name) {
    name = name.toLowerCase();
    name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    name = name.replace(/[\s-]/g, "");

    return name;
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

function saveSearchAppliances(){
    inputAppliances.addEventListener('keydown', (e) => {
        if(e.key ==='Enter') {
            const userSearch = formatName(e.target.value);
            inputAppliances.value = "";
            sectionFilterSave.classList.add('activeAppareils');
            allAppliances.forEach((appliance) => {
                if (sectionFilterSave.innerHTML.includes(userSearch) || !filteredAppliances.includes(appliance)) {
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
             // j'affiche les recettes qui contiennent le ou les appareils recherché
            const recipes = document.querySelectorAll('.recipesDisplay__article');
            recipes.forEach((recipe) => {
                const appliances = recipe.querySelectorAll('.recipesDisplay__article--description');
                appliances.forEach((appliance) => {
                    appliance = appliance.querySelector('p').textContent;
                    if(!formatName(appliance).match(userSearch)) {
                        recipe.style.display = 'none';
                    } else {
                        recipe.style.display = 'block';
                    }
                });
            });
        }
    });
    const pAppliances = document.querySelectorAll('.filterSearch__appareils--p');
    pAppliances.forEach((pAppliance) => {
        pAppliance.addEventListener('click', (e) => {
            const userClick = e.target.textContent;
            allAppliances.forEach(() => {
                if (sectionFilterSave.innerHTML.includes(userClick)) {
                    return;
                } 
                const saveSearch__container = document.createElement('div');
                const fillAppliance = document.createElement('p');
                
                saveSearch__container.setAttribute('class', 'filterSearch__appareilsSave--container');
                fillAppliance.setAttribute('class', 'filterSearch__appareil--save');
                fillAppliance.innerHTML = `${userClick} <i class="fa-regular fa-circle-xmark"></i>`;                
                sectionFilterSave.appendChild(saveSearch__container); 
                saveSearch__container.appendChild(fillAppliance); 
            });
            sectionFilterSave.classList.add('activeAppareils');
            const recipes = document.querySelectorAll('.recipesDisplay__article');
            recipes.forEach((recipe) => {
                const appliances = recipe.querySelectorAll('.recipesDisplay__article--description');
                appliances.forEach((appliance) => {
                    appliance = appliance.querySelector('p').textContent;
                    if(!formatName(appliance).match(formatName(userClick))) {
                        recipe.style.display = 'none';
                    } else {
                        recipe.style.display = 'block';
                    }
                });
            });
        });
    });
}
getAppliances(appliances);
displayAppliances(allAppliances);
searchAppliances();
saveSearchAppliances();
}
export { filterAppliances }