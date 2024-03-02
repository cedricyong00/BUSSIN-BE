var express = require("express");
var router = express.Router();
var busController = require("../controllers/bus");

//Create seats
router.post("/create", busController.createSeat);

//GET seats
router.get("/", busController.getAll);

//UPDATE seats
router.post("/:id", busController.updateSeat);

module.exports = router;
