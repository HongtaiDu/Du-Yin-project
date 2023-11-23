// const mockData = [];
const mockData = [
    { name: "Restaurant A", rating: "A" },
    { name: "Restaurant B", rating: "B" },
];
// fetch('http://localhost:5000/api/restaurants')
//     .then(response => response.json())
//     .then(data => {
//         mockData = data; // Store the data in mockData
//         console.log(mockData); // Now mockData contains your array of restaurants
//         // You can now use mockData elsewhere in your script, but only after this point
//     });

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



// Remember: At this point, mockData will still be empty because fetch hasn't completed yet


// async function fetchData() {
//     const response = await fetch('http://127.0.0.1:5000/api/restaurants');
//     const data = await response.json();
//     mockData = data;
//     console.log(mockData);
//     // Perform operations with mockData here or call other functions that need mockData
// }

// fetchData();

