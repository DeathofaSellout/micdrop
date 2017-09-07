const express = require("express");
const router = express.Router();

//This is convention

router.get("/", require("./controllers/index"));
router.get("/:id/edit", require("./controllers/edit"));
router.post("/", require("./controllers/create");
router.delete("/:id", require("./controllers/destroy"));
router.put("/:id", require("./controllers/update"));

module.exports = router;
