# newsfetch

## how to use this app

1.  Install node then open the terminal in same folder of project

2.  run **npm init** (i.e. it will install the dependecies)

3.  then run **nodemon server.js** or **node server.js**

4.  go to _http://localhost://5000_ to se the result

## Steps followed

1. npm init to initilize the app

2. install Express, axios, body-parser, nodemon

3. create basic app and define port i.e 5000 and import axios and bodyparser

4. register and get a API key for Time.com from NewsAPI.org then

5. make axios call to provided API

6. sotre the "data" field from the response in data[]

7. use next-generation destructuring to extract the "title" and "url" fields and store them into allnews[]

8. use res.json() to send the data for Frontend
