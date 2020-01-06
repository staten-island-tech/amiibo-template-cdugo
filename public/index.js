const path = require("path");
const hbs = require("hbs");
const express = require("express");
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, "../public");
const partialsPath = path.join(__dirname, "../templates/partials");
const viewsPath = path.join(__dirname, "../templates/views");
//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath); //telling express to get templates from templates/views folder
hbs.registerPartials(partialsPath);
//set up our static asset directory (gimme dat CSS)
app.use(express.static(publicDirectoryPath));
app.get("", async (req, res) => {
  try {
    res.render("index", {
      title: "Our First Express App"
    });
  } catch {
    res.status(500).send();
  }
});
app.get("/about/:id", async (req, res) => {
  const name = req.params.id;
  try {
    res.render("index", {
      title: name
    });
  } catch {
    res.status(500).send();
  }
});
app.get("/showcase/:id", async (req, res) => {
  const title = req.params.id;
  try {
    res.render("showcase", {
      title: `${title}`
    });
  } catch {
    res.status(500).send();
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
  console.log(viewsPath);
});

//127.0.0.1:3000