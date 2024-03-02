const daoBus = require("../daos/bus");

module.exports = {
  createSeat,
  getAll,
  updateSeat
};

async function createSeat(body) {
  const newSeat = await daoBus.create(body);
  return { success: true, data: newSeat };
}

async function getAll(query) {
  return daoBus.find(query);
}

function updateSeat(id, booking) {
  return daoBus.findByIdAndUpdate(id, booking, { new: true })
}
