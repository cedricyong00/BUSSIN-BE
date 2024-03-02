var express = require("express");
var router = express.Router();
var bookingController = require("../controllers/booking");
var securityMiddleware = require("../middlewares/security");

// @desc    Get all bookings(by user id)
// @route   GET /booking/
// @access  Private (bearer token passed in header)
router.get(
  "/",
  securityMiddleware.checkLogin,
  bookingController.getAllBookings
);

// @desc    Create a booking (Restaurant ID is passed in the body)
// @route   POST /booking/create
// @access  Private (bearer token passed in header)
router.post(
  "/create",
  securityMiddleware.checkLogin,
  bookingController.createBooking
);

// @desc    Get all bookings
// @route   GET /boss
// @access  Public
router.get("/boss", bookingController.getAll);



module.exports = router;
