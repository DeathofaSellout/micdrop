const express = require("express"); //web framework for node.js
const router = express.Router();

router.use("/listItems", require("./resources/listItems"));

module.exports = router;
