const express = require("express"); //requiring express
const app = express(); //allowing us to use express

app.set("view engine", "ejs");

// Mount router middleware to the application middleware
app.use(require("./resources"));

// Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Method Override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Static assets
app.use(express.static("./assets"));

// Preparing port for Heroku deployment
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
