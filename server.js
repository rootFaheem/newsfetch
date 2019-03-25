const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// BodyParser to work with body of the response
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

//  root route to welcome the user
app.get("/", (req, res) => res.send("Welcome to NewsFetch! "));

// Route to get API
app.get("/getTimeNews", (req, res) => {
  let allnews = [];
  let data = [];

  // API call to Time.com by NewsAPI.org
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?sources=time&apiKey=7c6655aba0184b9b91d65f48fa8a9b52"
    )
    .then(res => {
      data = res.data.articles;

      // loop to extract one by one news and store in the allnews array
      for (i = 0; i < 7; i++) {
        let { title, url } = data[i];
        allnews[i] = {
          news: {
            title: title,
            url: url
          }
        };
      }
    })
    .then(art => {
      // response to be show on http://localhost/getTimeNews
      res.json(allnews);
    })
    .catch(err => console.log(err));
});

app.listen(port, () => console.log(`server is running on: ${port}`));
