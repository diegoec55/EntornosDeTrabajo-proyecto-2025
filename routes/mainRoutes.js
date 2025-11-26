const express = require("express");
const { home, infoaromas } = require("../controllers/mainControllers");
const router = express.Router();
//Verbos HTTP -> GET, POST, PUT, PATCH, DELETE
router.get("/", home);
router.get("/infoaromas", infoaromas);

module.exports = router;