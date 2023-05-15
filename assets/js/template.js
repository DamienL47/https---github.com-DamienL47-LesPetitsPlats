
function recipesDatas(data) {
    const { id, name, serving, ingredients, time, description, appliance, ustensils } = data;
    let { quantity, unit, ingredient } = ingredients;


    
    function getRecipeCard() {
        const article = document.createElement('article');
        const emptyImg = document.createElement('div');
        const textZoneRecipe = document.createElement('div');
        const titleRecipe = document.createElement('h3');
        const blocRecipe = document.createElement('div');
        const blocIngredientsDisplay = document.createElement('div');  
        const listIngredientsDisplay = listIngredients();
        const descriptionDisplay = document.createElement('div');
        const textDescription = document.createElement('p');

        article.setAttribute('class', 'recipesDisplay__article');
        emptyImg.setAttribute('class', 'recipesDisplay__article--image');
        textZoneRecipe.setAttribute('class', 'recipesDisplay__article--textZone');
        titleRecipe.setAttribute('class', 'recipesDisplay__article--title');
        titleRecipe.innerHTML = `${name} <span class="recipesDisplay__article--blocTime"><i class="fa-regular fa-clock"></i> ${time} min</span>`;
        blocRecipe.setAttribute('class', 'recipesDisplay__article--blocRecipe');
        blocIngredientsDisplay.setAttribute('class', 'recipesDisplay__article--ingredients');   
        descriptionDisplay.setAttribute('class', 'recipesDisplay__article--description');
        textDescription.setAttribute('class', 'recipesDisplay__article--textDescription');
        textDescription.innerHTML = description;

        article.appendChild(emptyImg);
        article.appendChild(textZoneRecipe);
        textZoneRecipe.appendChild(titleRecipe);
        article.appendChild(blocRecipe)
        blocRecipe.appendChild(blocIngredientsDisplay);
        blocRecipe.appendChild(descriptionDisplay);
        blocIngredientsDisplay.appendChild(listIngredientsDisplay);
        descriptionDisplay.appendChild(textDescription);
        
        return article
    }

    function listIngredients() {
        const ulIngredients = document.createElement('ul');
        ulIngredients.setAttribute('class', 'listIngredients');
        for(let i = 0; i < ingredients.length; i++) {
            const ingredientList = document.createElement('li');
            ingredientList.setAttribute('class', 'ingredient')    
            if(ingredients[i].ingredient && ingredients[i].quantity && ingredients[i].unit){
                ingredientList.innerHTML = `<p><span class="ingredientTitle">${ingredients[i].ingredient}:</span> ${ingredients[i].quantity} ${ingredients[i].unit}</p>`;
            } else if (ingredients[i].ingredient && ingredients[i].quantity){
                ingredientList.innerHTML = `<p><span class="ingredientTitle">${ingredients[i].ingredient}:</span> ${ingredients[i].quantity}</p>`;
            } else {
                ingredientList.innerHTML = `<p><span class="ingredientTitle">${ingredients[i].ingredient}</span></p>`;
            }
            ulIngredients.appendChild(ingredientList);
        }
        return ulIngredients
    }

   


    // let ingredientsTable = data.ingredients.map((ingredient) => {ingredient = ingredient.ingredient; return ingredient});
    // console.log(ingredientsTable);
    
    // const inputIngredients = document.getElementById('ingredients');
    // const containerIngredients = document.querySelector('.filterSearch__ingredients--container');
    // const filteredIngredients = [];
    
    
    
    // function displayIngredients() {
    //     ingredientsTable.forEach((ingredient) => {             
    //         const paragraph = document.createElement('p');
    //         if(containerIngredients.innerHTML.includes(ingredient)) {
    //             return;
    //         }
    //         paragraph.setAttribute('class', 'filterSearch__ingredients--p');
    //         paragraph.textContent = ingredient;
    //         containerIngredients.appendChild(paragraph);
    //     });
    // }
    
    // displayIngredients();
    // function displayIngredients() {

    // }

   

    // const incrementFilter = document.querySelector('.filterSearch__ingredients');
    // const container = document.querySelector('.filterSearch__ingredients--container');
    // const inputIngredients = document.getElementById('ingredients');
    // const sectionFilterSave = document.getElementById('saveSearch__filter');

    // let ingredientsTable = [];
    // let allIngredients;
    // for(let i = 0; i < data.ingredients.length; i++) {
    //     for(let j = 0; j < data.ingredients[i].ingredient.length; j++) {
    //         allIngredients = data.ingredients[i].ingredient;
    //         for(let k = 0; k < allIngredients.length; k++) {
    //             if(!ingredientsTable.includes(allIngredients)) {
    //                 ingredientsTable.push(allIngredients);
    //             }
    //         }
    //     }
    // }

    // incrementFilter.addEventListener('click', displayIngredients(ingredientsTable));
    
    // function displayIngredients(ingredientsTable) {
    //     ingredientsTable.forEach((ingredient) => {
    //         if(!container.innerHTML.includes(ingredient)){
    //             const paragraph = document.createElement('p');
    //             paragraph.setAttribute('class', 'filterSearch__ingredients--p');
    //             paragraph.textContent = ingredient;
    //             container.appendChild(paragraph);
    //         }
    //     });  
    // }

    

    // inputIngredients.addEventListener('input', filterIngredients);
    
    // function filterIngredients(e) {
    //     container.innerHTML = '';
    //     const userSearchIngredient = formatName(e.target.value);            
    //     const filteredIngredients = allIngredients.filter(ingredient => 
    //         formatName(ingredient).includes(userSearchIngredient)
    //     );
    //     displayIngredients(filteredIngredients);     
    // }

    // function stockIngredient() {
    //     inputIngredients.addEventListener('keydown', (e) => {
    //         if(e.key === 'Enter') {
    //             inputIngredients.value = '';
                
    //             ingredientsTable.forEach((ingredient) => {
                    
                    // if (sectionFilterSave.innerHTML.includes(ingredient)) {
                    //     return;
                    // } 
                    // const saveSearch__container = document.createElement('div');
                    // saveSearch__container.setAttribute('class', 'filterSearch__ingredientsSave--container');
                    // const fillIngredient = document.createElement('p');
                    // fillIngredient.setAttribute('class', 'filterSearch__ingredients--save');
                    // fillIngredient.innerHTML = `${ingredient} <i class="fa-regular fa-circle-xmark"></i>`;
                    // sectionFilterSave.appendChild(saveSearch__container); 
                    // saveSearch__container.appendChild(fillIngredient);   
    //                 const deleteIngredient = document.querySelectorAll('.fa-circle-xmark');
                    // deleteIngredient.forEach((deleteIngredient, index) => {
                    //     deleteIngredient.addEventListener('click', (ev) => {
                    //         // const divParent = ev.target.closest('.filterSearch__ingredientsSave--container');
                    //         const indexIngredient = tableauTrieIngredients.indexOf(fillIngredient[index]);
                    //         tableauTrieIngredients.splice(indexIngredient, 1);
                    //         // divParent.remove();
                    //         deleteIngredient.parentElement.remove();
                    //         // console.log('après = ' + tableauTrieIngredients);
                            
                
                    //     });
                    // });                   
                    
                    
    //             });
    //         }
    //     });
    // }
    //     function displayRecipesIngredient() {
            // const recipesDisplay = document.querySelectorAll('.recipesDisplay__article');
            // recipesDisplay.forEach((recipe) => {
            //     // j'affiche les recettes qui contiennent les ingrédients du tableau trié en utilisant le modele getRecipesCard
            //     if(tableauTrieIngredients.every((ingredient) => recipe.innerHTML.includes(ingredient))) {
            //         recipe.style.display = 'block';
            //     } else {
            //         recipe.style.display = 'none';
            //     }
            // });
    //     }
   
        
    // const incrementFilterAppareil = document.querySelector('.filterSearch__appareils');
    // const containerAppareil = document.querySelector('.filterSearch__appareils--container');
    // const inputAppareil = document.getElementById('appareils');
    // incrementFilterAppareil.addEventListener('click', filterAppareils)
    
    // function filterAppareils() {
    //     const applianceSplit = appliance.split(",");
    //     applianceSplit.forEach(appareil => { 
    //         if(containerAppareil.innerHTML.includes(appareil)) {
    //             return;
    //         }
    //         const paragraph = document.createElement('p');
    //         paragraph.setAttribute('class', 'filterSearch__appareils--p');
    //         paragraph.innerHTML = appareil;
    //         containerAppareil.appendChild(paragraph);
    //     });
    //     incrementFilterAppareil.appendChild(containerAppareil);
    // }

    // console.log(appliance);
    // inputAppareil.addEventListener('input', applianceFilter);
    // function applianceFilter(e) {
    //     containerAppareil.innerHTML = '';
    //     const inputAppareil = formatName(e.target.value);
    //     const filteredAppliance = formatName(appliance).includes(inputAppareil);

    //     // const filteredAppliance = filterAppareils().filter(formatName(appareil).includes(inputAppareil));  
        
    //     filterAppareils(filteredAppliance);     
    // }


    
    // function filterUstencils() {
    //     const incrementFilter = document.querySelector('.filterSearch__ustencils');
    //     const container = document.querySelector('.filterSearch__ustencils--container');
    //     incrementFilter.addEventListener('click', () => {
    //         ustensils.forEach(ustensil => {
    //             if(container.innerHTML.includes(ustensil)) {
    //                 return
    //             }
    //             const paragraph = document.createElement('p');
    //             paragraph.setAttribute('class', 'filterSearch__ustencils--p');
    //             paragraph.innerHTML = ustensil;
    //             container.appendChild(paragraph);
    //         });
    //         incrementFilter.appendChild(container);
    //     });
    // }


    // displayIngredients();
    // filterAppareils();
    // filterUstencils();

    return {id, name, serving, ingredients, time, description, appliance, ustensils, getRecipeCard}
}

export { recipesDatas };
