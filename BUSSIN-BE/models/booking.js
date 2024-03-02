const daoBooking = require("../daos/booking");

module.exports = {
  createBooking,
  getAllBookings,
  getAll
};

async function createBooking(booking) {
  const createdBooking = await daoBooking.create(booking);
  return await daoBooking.findById(createdBooking.id);
}

function getAllBookings(id) {
  return daoBooking.find({user: id}).populate("seat").populate("user");
}

function getAll(query) {
  return daoBooking.find(query).populate("seat").populate("user");
}