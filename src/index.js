import './css/common.css';
    
import countryCardTpl from './templates/country_card.hbs';
import countryListTpl from './templates/country-list.hbs';
import API from './js/api-service';
import getRefs from './js/get-refs';

import debounce from 'lodash.debounce';


const refs = getRefs();

function renderCountryCard(country) {
    const card = countryCardTpl(country[0]);
    refs.cardContainer.innerHTML = card; 
    refs.listCountries.innerHTML = '';

};

function renderCountryList(value) {
    const list = countryListTpl({country: value});
    console.log(list);
    console.log(refs.listCountries);
    refs.cardContainer.innerHTML = '';   


    refs.listCountries.innerHTML = list;
}

refs.searchInput.addEventListener('input', debounce(onSearch, 500));

function renderResult(countryArray) {

    if (countryArray.length > 1) {
        renderCountryList(countryArray)
    } else {
        renderCountryCard(countryArray)
    }
}


function onSearch(e) {
    const searchQuery = e.target.value;
    API.fetchCountryByName(searchQuery).then(renderResult)
    .catch(onFetchError)
    .finally(() => e.target.value = '');        
};

function onFetchError(error) {
        alert('this country does not exist');    
}