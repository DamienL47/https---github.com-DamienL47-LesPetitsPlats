function filterIngredients(ingredients) {
    // const { ingredient, quantity, unit } = ingredients;


let inputIngredients = document.getElementById('ingredients');
const containerIngredients = document.querySelector('.filterSearch__ingredients--container');
const sectionFilterSave = document.getElementById('saveSearch__filter');
const displayArticle = document.getElementById('recipesDisplay');

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
            sectionFilterSave.classList.add('activeIngredients');
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
    const pIngredients = document.querySelectorAll('.filterSearch__ingredients--p');
    pIngredients.forEach((pIngredient) => {
        pIngredient.addEventListener('click', (e) => {
            const userClick = e.target.textContent;
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
            sectionFilterSave.classList.add('activeIngredients');
             // j'affiche les recettes qui contiennent le ou les ingrédients recherché
            const recipes = document.querySelectorAll('.recipesDisplay__article');
            recipes.forEach((recipe) => {
                const ingredients = recipe.querySelectorAll('.recipesDisplay__article--ingredients');
                ingredients.forEach((ingredient) => {
                    ingredient = ingredient.querySelector('p').textContent;
                    if(!formatName(ingredient).match(formatName(userClick))) {
                        recipe.style.display = 'none';
                    } else {
                        recipe.style.display = 'block';
                    }
                });
            });
        });
    });
}
getIngredients(ingredients);
displayIngredients(allIngredients);
searchIngredients();
saveSearchIngredient(); 

}

export { filterIngredients }