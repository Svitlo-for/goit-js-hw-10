
import Notiflix from "notiflix";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

import { refs } from "./refs";
import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import { createMarkup, createCatMarkup } from "./markup";

refs.breedSelect.addEventListener('change', onChange);

refs.breedSelect.classList.add("hidden");
refs.error.classList.add("hidden");

fetchBreeds().then(array => {
    refs.breedSelect.classList.remove("hidden");
    refs.error.classList.add("hidden");
    refs.loader.classList.add("hidden");
    refs.breedSelect.innerHTML = createMarkup(array.data);
    selectStyled();
})
.catch(error => {
    refs.loader.classList.add("hidden");
    Notiflix.Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
})

function onChange(element) {
    refs.loader.classList.remove("hidden"); 
    refs.catInfo.classList.add("hidden"); 
    refs.error.classList.add("hidden");
    const elementId = element.target.value;

    fetchCatByBreed(elementId).then(object => {
        refs.catInfo.innerHTML = createCatMarkup(object.data[0]);
        refs.loader.classList.add('hidden');
        refs.catInfo.classList.remove('hidden');
            })
            .catch(error => {
                refs.loader.classList.add("hidden");
                Notiflix.Notify.failure(`Oops! Something went wrong! Try reloading the page!`);
            })
}


function selectStyled() {
    new SlimSelect({
      select: refs.breedSelect
    });
  }