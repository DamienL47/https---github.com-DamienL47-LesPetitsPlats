function deployFilter(element1, element2, element3) {
    const btnFilterClic = document.querySelector(`${element1}`);
    const inputSearch = btnFilterClic.querySelector(`${element2}`);
    const chevron = document.querySelector('.fa-chevron-down');
    const container = document.querySelector(`${element3}`);
    btnFilterClic.addEventListener('click', () => {
        if(!chevron.classList.contains('active')) {
            btnFilterClic.classList.add('open');
            chevron.classList.add('active');
            container.classList.add('open');
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

deployFilter('.filterSearch__ingredients', '#ingredients', '.filterSearch__ingredients--container');
deployFilter('.filterSearch__appareils', '#appareils', '.filterSearch__appareils--container');
deployFilter('.filterSearch__ustencils', '#ustencils', '.filterSearch__ustencils--container');


