// mongoose import
// mongoose schema aur model banane ke liye use hota hai
const mongoose = require("mongoose");


// note schema
// database structure define kar raha hai
const noteSchema = new mongoose.Schema(

  {
    // note title
    title: {

      // datatype
      type: String,

      // compulsory field
      required: true,
    },


    // note content
    content: {

      // datatype
      type: String,

      // compulsory
      required: true,
    },
  },

  {
    // automatically createdAt & updatedAt add karega
    timestamps: true,
  }
);


// model create
// "Note" -> collection name banega "notes"
module.exports = mongoose.model("Note", noteSchema);