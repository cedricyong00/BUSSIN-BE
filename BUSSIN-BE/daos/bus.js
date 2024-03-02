const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const busSchema = new Schema(
  {
    SeatsNumber: {
      type: String,
    //   to provide a number of seats available on the bus
    },
    booked: {
      type: Boolean,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  }
);

// Compile schema into model and export it
module.exports = mongoose.model("Bus", busSchema);