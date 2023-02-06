const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController.js")

router.get("/" , controller.home)
router.get("/about" , controller.about)

module.exports = router;