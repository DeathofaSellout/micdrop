const express = require("express");
const router = express.Router();

router.get("/", require("./controllers/index"));
router.post("/", require("./controllers/create"));
router.delete("/:id", require("./controllers/destroy"));
router.put("/:id", require("./controllers/update"));

module.exports = router;
