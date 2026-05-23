const express = require("express");

// same names import hone chahiye
const {
  createNote,
  getNotes,
} = require("../controllers/noteController");

const router = express.Router();

// createNote function hona chahiye
router.post("/", createNote);

// getNotes function hona chahiye
router.get("/", getNotes);

module.exports = router;