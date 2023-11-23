const mockData = [
    { name: "Restaurant A", rating: "A" },
    { name: "Restaurant B", rating: "B" },
];


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
        resultsDiv.innerHTML += `<p>${restaurant.name} - Rating: ${restaurant.rating}</p>`;
    });
}
