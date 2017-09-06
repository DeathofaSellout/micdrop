const express = require("express");
const router = express.Router();

// This is the convention

// GET /wines -> index
// GET /wines/:id -> show
// POST /wines -> create
// GET /wines/:id/edit -> edit
// PUT /wines/:id -> update
// DELETE /wines/:id -> destroy

router.get("/", require("./controllers/index"));

router.get("/:id/edit", require("controllers/edit"));

router.put("/:id", require("./controllers/update"));

router.post("/", require("./controllers/create"));

router.delete(":/id", require("./controllers/destroy"));

module.exports = router;
