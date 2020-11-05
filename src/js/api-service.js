const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountryByName(countryName) {
    return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(response => {
            return response.json();
        })
};


export default {
    fetchCountryByName
}