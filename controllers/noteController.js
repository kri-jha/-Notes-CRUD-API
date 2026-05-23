const Note = require("../models/note");

// CREATE NOTE controller
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = await Note.create({
      title,
      content,
    });

    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({
      message: "Error creating note",
      error: error.message,
    });
  }
};

// GET ALL NOTES controller
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching notes",
      error: error.message,
    });
  }
};

// same names export hone chahiye
module.exports = {
  createNote,
  getNotes,
};