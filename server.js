const express = require("express"); //requiring express
const app = express(); //allowing us to use express

app.set("view engine", "ejs");

//Configure body parser to extract data from forms (and AJAX requests)
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Configure method override to allow us to make PUT and DELETE requests with HTML forms
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

//Tell express where to find the static assets served by OUR server (AKA not a CDN)
app.use(express.static("./assets"));
// Preparing port for Heroku deployment or localhost
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.redirect("/playlists", 302);
});
// Mount router middleware to the application middleware
app.use(require("./resources"));

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
