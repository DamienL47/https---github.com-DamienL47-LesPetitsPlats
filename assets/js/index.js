import { recipesDatas } from "./template.js"



async function getRecipes() {
    const response = await fetch('../../data/recipes.json');
    const data = await response.json();
    const recipes = data.recipes;

    return recipes;
}
/* -------------------------- ingredients --------------------------------*/
let inputIngredients = document.getElementById('ingredients');
const containerIngredients = document.querySelector('.filterSearch__ingredients--container');
const sectionFilterSave = document.getElementById('saveSearch__filter');
const displayArticle = document.getElementById('recipesDisplay');

let allIngredients = [];

function displayDataRecipes(recipes) {
    recipes
    .forEach((recipe) => {
        const recipeModel = recipesDatas(recipe);
        const recipeCardDOM = recipeModel.getRecipeCard();
        displayArticle.appendChild(recipeCardDOM);
    });  
}
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
function formatName(name) {
    name = name.toLowerCase();
    name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    name = name.replace(/[\s-]/g, "");

    return name;
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
function saveSearchIngredient() {
    inputIngredients.addEventListener('keydown', (e) => {        
        if(e.key ==='Enter') {
            const userSearch = formatName(e.target.value);
            inputIngredients.value = "";
            allIngredients.forEach((ingredient) => {
                if (sectionFilterSave.innerHTML.includes(userSearch) || !filteredIngredients.includes(ingredient)) {
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
             // j'affiche les recettes qui contiennent le ou les ingrédients recherché
            const recipes = document.querySelectorAll('.recipesDisplay__article');
            recipes.forEach((recipe) => {
                const ingredients = recipe.querySelectorAll('.recipesDisplay__article--ingredients');
                ingredients.forEach((ingredient) => {
                    ingredient = ingredient.querySelector('p').textContent;
                    if(!formatName(ingredient).match(userSearch)) {
                        recipe.style.display = 'none';
                    } else {
                        recipe.style.display = 'block';
                    }
                });
            });
        }
    });
}

/* -------------------------- Appareils --------------------------------*/
const inputAppliances = document.getElementById('appareils');
const containerAppliances = document.querySelector('.filterSearch__appareils--container');
// const sectionFilterSave = document.getElementById('saveSearch__filter');
// const displayArticle = document.getElementById('recipesDisplay');
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

function saveSearchAppliances(){
    inputAppliances.addEventListener('keydown', (e) => {
        if(e.key ==='Enter') {
            const userSearch = formatName(e.target.value);
            inputAppliances.value = "";
            allAppliances.forEach((appliance) => {
                if (sectionFilterSave.innerHTML.includes(userSearch) || !filteredAppliances.includes(appliance)) {
                    return;
                } 
                const saveSearch__container = document.createElement('div');
                const fillAppliance = document.createElement('p');
                
                saveSearch__container.setAttribute('class', 'filterSearch__appareilsSave--container');
                fillAppliance.setAttribute('class', 'filterSearch__appareil--save');
                fillAppliance.innerHTML = `${userSearch} <i class="fa-regular fa-circle-xmark applianceClose"></i>`;                
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
}


/* -------------------------- Ustensiles --------------------------------*/
let allUstensils = [];
const inputUstensils = document.getElementById('ustencils');
const containerUstensils = document.querySelector('.filterSearch__ustencils--container');

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
            const userSearch = formatName(e.target.value);
            inputUstensils.value = "";
            allUstensils.forEach((ustensil) => {
                if (sectionFilterSave.innerHTML.includes(userSearch) || !filteredUstensils.includes(ustensil)) {
                    return;
                } 
                const saveSearch__container = document.createElement('div');
                const fillUstensil = document.createElement('p');
                
                saveSearch__container.setAttribute('class', 'filterSearch__ustencilsSave--container');
                fillUstensil.setAttribute('class', 'filterSearch__ustensil--save');
                fillUstensil.innerHTML = `${userSearch} <i class="fa-regular fa-circle-xmark ustensilClose"></i>`;                
                sectionFilterSave.appendChild(saveSearch__container); 
                saveSearch__container.appendChild(fillUstensil); 
            });
             // j'affiche les recettes qui contiennent le ou les ustensiles recherché
            const recipes = document.querySelectorAll('.recipesDisplay__article');
            recipes.forEach((recipe) => {
                const ustensils = recipe.querySelectorAll('.recipesDisplay__article--description');
                ustensils.forEach((ustensil) => {
                    ustensil = ustensil.querySelector('p').textContent;
                    if(!formatName(ustensil).match(userSearch)) {
                        recipe.style.display = 'none';
                    } else {
                        recipe.style.display = 'block';
                    }
                });
            });
        }
    });
}


function deleteSearch() {
    sectionFilterSave.addEventListener('click', (e) => {
        if(e.target.classList.contains('fa-circle-xmark')) {
            const deleteIngredient = e.target.parentElement;
            const div = deleteIngredient.parentElement;
            div.remove();
        }
    }); 
}
async function init() {
    const recipes = await getRecipes();
    displayDataRecipes(recipes); 
    
    const ingredients = await getRecipes(recipes);
    getIngredients(ingredients);

    const appliances = await getRecipes(recipes);
    getAppliances(appliances);

    const ustensils = await getRecipes(recipes);
    getUstensils(ustensils);
    
/* -------------------------- ingredients --------------------------------*/
    displayIngredients(allIngredients);
    searchIngredients();
    saveSearchIngredient(); 
    /* -------------------------- Appareils --------------------------------*/
    displayAppliances(allAppliances);
    searchAppliances();
    saveSearchAppliances();
    /* -------------------------- Ustensiles --------------------------------*/
    displayUstensils(allUstensils);
    searchUstensils();
    saveSearchUstensils();

    deleteSearch(); 
}

init();