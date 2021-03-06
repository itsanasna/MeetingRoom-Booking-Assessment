const express = require("express");

const meetingRooms = express.Router();

// const bookings = express.Router();

const { getRoomBookings } = require("../queries/bookings.js");
const {
  getAllRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom
} = require("../queries/meetingRooms.js");

meetingRooms.get("/", async (req, res) => {
  // const meetingRooms = await getAllRooms();
  res.json(await getAllRooms());
});

meetingRooms.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getRoom(id));
});

meetingRooms.post("/", async (req, res) => {
  res.json(await createRoom(req.body));
});

meetingRooms.put("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await updateRoom(id, req.body));
});

meetingRooms.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteRoom(id));
});

meetingRooms.get("/:id/bookings", async (req, res) => {
  const { id } = req.params;
  res.json(await getRoomBookings(id));
});

module.exports = meetingRooms;
