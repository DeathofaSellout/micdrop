<<<<<<< HEAD
//setting up base url for resource

const express = require("express"); //web framework for node.js
const router = express.Router();

router.use("/playlists", require("./resources/playlists"));

module.exports = router;
