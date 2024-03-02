const Booking = require("../models/booking");
const modelBus = require("../models/bus");
const { sendEmail } = require("../util/sendEmail");
const dateTimeHandler = require("../util/datetime");
const { checkJWT } = require("../middlewares/security");

module.exports = {
  createBooking,
  getAllBookings,
  getAll
};

// // @desc    Get all bookings(by user id)
// // @route   GET /booking/
// // @access  Private
async function getAllBookings(req, res) {
  const bookings = await Booking.getAllBookings(req.user.id);
  res.json(bookings);
}

// @desc    Create a booking (Restaurant ID is passed in the body)
// @route   POST /booking/create
// @access  Private (bearer token passed in header)
async function createBooking(req, res) {
  const loggedInUserId = req.user.id;
  const { SeatsNumber: SeatsNumber, user: user, date: date, location: location } = req.body;

  // Create bookings for each seat ID
  try {
    const bookings = SeatsNumber.map((seatId) => {
        // Use the Booking model to create a booking
        return Booking.createBooking({ seat: seatId, user: loggedInUserId, date: date, location: location });
      });

    res.status(201).json({ bookings });
  } catch (error) {
    console.error("Error creating bookings:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating bookings" });
  }
}

// // @desc    Get all bookings
// // @route   GET /booking/boss
// // @access  Public
async function getAll(req, res) {
  try {
    const data = await Booking.getAll(req.query);
    res.json({ bookings: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errorMsg: err.message });
  }
}