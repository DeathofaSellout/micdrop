const express = require("express"); //requiring express
const app = express(); //allowing us to use express

// Mount router middleware to the application middleware
app.use(require("./resources"));

// Preparing port for Heroku deployment
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
