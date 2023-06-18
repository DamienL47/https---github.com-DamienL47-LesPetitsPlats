function deployFilter(element1, element2) {
    const btnFilterClic = document.querySelector(`${element1}`);
    const chevron = btnFilterClic.querySelector('.triDown');
    const inputSearch = btnFilterClic.querySelector(`${element2}`)
    btnFilterClic.addEventListener('click', () => {
        if(!chevron.classList.contains('active')) {
            chevron.classList.add('active');
            btnFilterClic.classList.add('open');
            btnFilterClic.style.width = '50%';
            btnFilterClic.style.height = '28em';
            if(inputSearch.value == "Ingrédients") {
                inputSearch.value = "";
                inputSearch.setAttribute('placeholder', 'Rechercher un ingrédient');
            } else if(inputSearch.value == "Appareils") {
                inputSearch.value = "";
                inputSearch.setAttribute('placeholder', 'Rechercher un appareil');
            } else if(inputSearch.value == "Ustensiles") {
                inputSearch.value = "";
                inputSearch.setAttribute('placeholder', 'Rechercher un ustensile');
            }
        } else {
            chevron.classList.remove('active');
            btnFilterClic.classList.remove('open');
            btnFilterClic.style.width = '15%';
            btnFilterClic.style.height = '3.9em';
            if(inputSearch.placeholder == "Rechercher un ingrédient") {
                inputSearch.value = "Ingrédients";
            } else if(inputSearch.placeholder == "Rechercher un appareil") {
                inputSearch.value = "Appareils";
            } else if(inputSearch.placeholder == "Rechercher un ustensile") {
                inputSearch.value = "Ustensiles";
            }
        }
    });
}

deployFilter('.filterSearch__ingredients', '#ingredients');
deployFilter('.filterSearch__appareils', '#appareils');
deployFilter('.filterSearch__ustencils', '#ustencils');
