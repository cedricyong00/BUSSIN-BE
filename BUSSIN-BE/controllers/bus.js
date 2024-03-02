const modelBus = require("../models/bus");

module.exports = {
  createSeat,
  getAll,
  updateSeat
};

async function createSeat(req, res) {
  let create;
  const errors = [];

  try {
    // Create Seat
    create = await modelBus.createSeat({
      ...req.body,
    });
    res.status(201).json(create);
  } catch (err) {
    res.status(500).json({ errorMsg: err.message });
  }
}

async function getAll(req, res) {
  try {
    const data = await modelBus.getAll(req.query);
    res.json({ buses: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ errorMsg: err.message });
  }
}

async function updateSeat(req, res) {
    let updatedSeat;
      //update booking
      updatedSeat = await modelBus.updateSeat(req.params.id, req.body);
      res.status(200).json(updatedSeat);
    }
