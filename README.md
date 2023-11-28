# Leetcode Bootcamp Project
NYC Restaurant Health Ratings

# Basic Information
* Author: Hongtai Du, Tony Yin
* Email: hd2609@nyu.edu, zy2734@nyu.edu
* Project start date: 01/11/2023
* The purpose of this project is to get top 50 the heathiest and the most clean restaurants in NYC by the data from Department of Health and Mental Hygiene (DOHMH). The list does not contain the restaurants without scores or names in the database.
* To use this web app, you have to search for a specific county at NYC, such as Brooklyn. Otherwise, there is no results displayed.

# Project running instruction
* command line
    1. export FLASK_APP=app (optional)
    2. export FLASK_ENV=development (optional)
    3. flask run 
* next
    1. open a broswer
    2. copy http://127.0.0.1:5000/ to the broswer
    3. To turn off this project, press control + C on your keyboard.

* Note:
    1. Must have python installed
    2. Must have flask, requests, csv libary installed
    3. If you are using VScode, make sure that your version of python interpreter in VScode is the same as the version of pip
        1. To check this, use command line "pip --version"

# Data Source
    * https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results/43nn-pn8j