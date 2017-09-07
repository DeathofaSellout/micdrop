//Why do I have a resource file and a resource folder? Study express and Router specifically
//setting up base url for resource
const express = require("express"); //web framework for node.js
const router = express.Router();

router.use("/playlists", require("./resources/playlists"));

module.exports = router;
