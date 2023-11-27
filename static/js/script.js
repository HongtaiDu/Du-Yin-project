

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
        restaurant.name.toLowerCase().includes(searchTerm)
    );
    displayResults(filteredData);
}

function displayResults(data) {
    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    data.forEach(restaurant => {
        resultsDiv.innerHTML += `<p>${restaurant.name} - 
        Rating: ${restaurant.rating}, County: ${restaurant.county}, 
        Street: ${restaurant.rating}, Zipcode: ${restaurant.zipcode}, 
        Phone: ${restaurant.phone}, Cuisine: ${restaurant.cuisine}</p>`;
    });
}

