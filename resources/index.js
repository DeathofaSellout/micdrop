const express = require("express");
const router = express.Router();


router.get("/", require("./controllers/index"));

router.get("/:id/edit", require("controllers/edit"));

router.put("/:id", require("./controllers/update"));

router.post("/", require("./controllers/create"));

router.delete(":/id", require("./controllers/destroy"));

module.exports = router;
