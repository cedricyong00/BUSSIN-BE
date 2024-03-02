const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  seat: {
    type: Schema.Types.ObjectId,
    ref: "Bus",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: String,
  },
  location: {
    type: String,
  }

});

module.exports = mongoose.model("Booking", bookingSchema);
