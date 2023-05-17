function filterUstensils(ustensils) {

    let allUstensils = [];

    const inputUstensils = document.getElementById('ustencils');
    const containerUstensils = document.querySelector('.filterSearch__ustencils--container');
    const sectionFilterSave = document.getElementById('saveSearch__filter');
    
    function getUstensils(recipes) {
        recipes.forEach((ustensils) => {
            allUstensils = allUstensils.concat(ustensils.ustensils);
        });
    }

    function formatName(name) {
        name = name.toLowerCase();
        name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        name = name.replace(/[\s-]/g, "");
    
        return name;
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
                sectionFilterSave.classList.add('activeUstensils');
                allUstensils.forEach((ustensil) => {
                    if (sectionFilterSave.innerHTML.includes(userSearch) || !filteredUstensils.includes(ustensil)) {
                        return;
                    } 
                    const saveSearch__container = document.createElement('div');
                    const fillUstensil = document.createElement('p');
                    
                    saveSearch__container.setAttribute('class', 'filterSearch__ustensilsSave--container');
                    fillUstensil.setAttribute('class', 'filterSearch__ustensil--save');
                    fillUstensil.innerHTML = `${userSearch} <i class="fa-regular fa-circle-xmark"></i>`;                
                    sectionFilterSave.appendChild(saveSearch__container); 
                    saveSearch__container.appendChild(fillUstensil); 
                });
                const recipes = document.querySelectorAll('.recipesDisplay__article');
                recipes.forEach((recipe) => {
                    console.log(recipe)
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
        const pUstensils = document.querySelectorAll('.filterSearch__ustencils--p');
        pUstensils.forEach((pUstensil) => {
            pUstensil.addEventListener('click', (e) => {
                const userSearch = e.target.textContent;
                allUstensils.forEach(() => {
                    if (sectionFilterSave.innerHTML.includes(userSearch)) {
                        return;
                    } 
                    const saveSearch__container = document.createElement('div');
                    const fillUstensil = document.createElement('p');
                    
                    saveSearch__container.setAttribute('class', 'filterSearch__ustensilsSave--container');
                    fillUstensil.setAttribute('class', 'filterSearch__ustensil--save');
                    fillUstensil.innerHTML = `${userSearch} <i class="fa-regular fa-circle-xmark"></i>`;                
                    sectionFilterSave.appendChild(saveSearch__container); 
                    saveSearch__container.appendChild(fillUstensil); 
                });
                sectionFilterSave.classList.add('activeUstensils');
                const recipes = document.querySelectorAll('.recipesDisplay__article');
                recipes.forEach((recipe) => {
                    const ustensils = recipe.querySelectorAll('.recipesDisplay__article--description');
                    ustensils.forEach((ustensil) => {
                        ustensil = ustensil.querySelector('p').textContent;
                        if(!formatName(ustensil).match(formatName(userSearch))) {
                            recipe.style.display = 'none';
                        } else {
                            recipe.style.display = 'block';
                        }
                    });
                });
            });
        });
        // deleteSearch('ustensil', 'userSearch');
    }
    getUstensils(ustensils);
    displayUstensils(allUstensils);
    searchUstensils();
    saveSearchUstensils();
}

export { filterUstensils };