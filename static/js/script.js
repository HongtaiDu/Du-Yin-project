

/*
Method to get restaurant data from Flask
It is used in the html file
to fill mockData variable
*/
function getData(vars) {
    return vars
}

function searchRestaurants() {
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let filteredData = mockData.filter(restaurant => 
        restaurant.county.toLowerCase() === searchTerm
    );
    
    if (filteredData.length === 0) {
        displayNoResults();
    } else {
        displayResults(filteredData);
    }
}

function displayResults(data) {
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    data.forEach(restaurant => {
        resultsDiv.innerHTML += `<p>${restaurant.name} - 
        Rating: ${restaurant.rating}, County: ${restaurant.county}, 
        Street: ${restaurant.street}, Zipcode: ${restaurant.zipcode}, 
        Phone: ${restaurant.phone}, Cuisine: ${restaurant.cuisine}</p>`;
    });
}

function displayNoResults() {
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p>No restaurant is in this county</p>';
}

function displayTopRestaurants() {
    let sidebarDiv = document.getElementById('rank');
    sidebarDiv.innerHTML = '<h3>Top Rated Restaurants</h3>';

    for (let i = 0; i < 3; i++) {
        let restaurant = mockData[i];
        sidebarDiv.innerHTML += `<p>${i + 1}. ${restaurant.name} - Rating: ${restaurant.rating}</p>`;
    }
}

document.addEventListener('DOMContentLoaded', displayTopRestaurants);