
function recipesDatas(data) {
    const { id, name, serving, ingredients, time, description, appliance, ustensils } = data;
    
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


    return {id, name, serving, ingredients, time, description, appliance, ustensils, getRecipeCard}
}

export { recipesDatas };
