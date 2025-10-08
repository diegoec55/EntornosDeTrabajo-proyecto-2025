const express = require("express");
const { home } = require("../controllers/mainControllers");
const router = express.Router();
//Verbos HTTP -> GET, POST, PUT, PATCH, DELETE
router.get("/", home);

module.exports = router;