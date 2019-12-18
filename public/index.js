const path = require("path");
const express = require("express");
const app = express();
const hbs = require('hbs')

//def paths for express
const publicDirectoryPath = path.join(__dirname, '../public')
const partialsPath = path.join(__dirname, '../templates/partials')
const viewsPath = path.join(__dirname, '../templates/views');


//setup handlebars engine and views location

app.set('view engine', 'hbs'); //telling express/node to use handlebars for templates
app.set('views', viewsPath)//telling express to get templates from templates/views
hbs.registerPartials(partialsPath);
app.get("/about/:id", async(req, res) => {
  const name = req.params.id;
  try{
    res.render('index', {
      title: `${name}`
    });
  } catch (error) {
    res.status(500).send('Page not found');
  }
});
app.get("/thamisucks", (req, res) => {
  res.send("Thami sucks. And Yes I have to do this while you eat");
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
app.get("/swag", async(req, res) => {

  try{
    res.render('swag');
  } catch (error) {
    res.status(500).send('Page not found');
  }
});

//127.0.0.1:3000
