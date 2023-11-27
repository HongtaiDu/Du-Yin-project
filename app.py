from flask import Flask, render_template
import requests
import csv
from io import StringIO

app = Flask(__name__)

def getRestaurantData(csvContent):
    data = []
    for row in csvContent:
        if row['dba'] != '' and row['score'] != '':
            # Check each field individually to replace empty part with 'N/A'
            if row['boro'] == '':
                row['boro'] = 'N/A'
            if row['street'] == '':
                row['street'] = 'N/A'
            if row['zipcode'] == '':
                row['zipcode'] = 'N/A'
            if row['phone'] == '':
                row['phone'] = 'N/A'
            if row['cuisine_description'] == '':
                row['cuisine_description'] = 'N/A'

            restaurant_data = {
                "name": row['dba'], 
                "rating": row['score'],
                "county": row['boro'],
                "street": row['street'],
                "zipcode": row['zipcode'],
                "phone": row['phone'],
                "cuisine": row['cuisine_description']
            }
            data.append(restaurant_data)
    return data

# bubble sort to sort the list of restaurant
# Sorted list starts with the highest rated restaurant
def bubble_sort(data):
    n = len(data)
    for i in range(n - 1):
        swapped = False
        for j in range(n - i - 1):
            # Compare the "rating" of the current restaurant with the next restaurant
            rating1 = int(data[j]['rating'])
            rating2 = int(data[j + 1]['rating'])
            # Change the comparison operator to sort in descending order
            if rating1 < rating2:  
                # Swap the restaurants if they are in the wrong order
                data[j], data[j + 1] = data[j + 1], data[j]
                swapped = True
        # If no restaurants were swapped in this pass, the list is sorted
        if not swapped:
            break
    return data

# method to sort the restaurants
def selectRestaurants(dataList):
    result = []
    count = 0  # Initialize a counter to keep track of the number of iterations
    for onedata in dataList:
        result.append(onedata)
        count += 1  # Increment the counter
        if count >= 50:  # Check if the counter reaches 50
            break  # Break out of the loop if the limit is reached
    return result

# default route on local server
@app.route("/", methods=['GET'])
def hello_world():
    req = requests.get("https://data.cityofnewyork.us/resource/43nn-pn8j.csv") 
    content = StringIO(req.content.decode('utf-8'))
    csv_reader = csv.DictReader(content)
    data = getRestaurantData(csv_reader)
    sortedData = bubble_sort(data)
    highRated = selectRestaurants(sortedData)
    return render_template('index.html', data=highRated)