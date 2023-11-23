from flask import Flask, render_template
import requests
import csv
from io import StringIO
import json

app = Flask(__name__)

# default route on local server
@app.route("/", methods=['GET'])
def hello_world():
    req = requests.get("https://data.cityofnewyork.us/resource/43nn-pn8j.csv") 
    content = StringIO(req.content.decode('utf-8'))
    csv_reader = csv.DictReader(content)
    data = [row for row in csv_reader]
    return render_template('app.html', data=data)
    
    
    # req.content to get data from the csv file
    # json.loads() converts the data to python object
    #data = json.loads(req.content)
    #return render_template('app.html', data=data['all']) # 'all' converts data to list


# def get_restaurants():
#     restaurants = [
#     { "name": "Restaurant A", "rating": "A" },
#     { "name": "Restaurant B", "rating": "B" },
#     ];# Your list of restaurants
#     return jsonify(restaurants)