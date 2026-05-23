const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// notes routes import
const noteRoutes = require("./routes/noteRoutes");


// .env variables load
dotenv.config();


// MongoDB connect
connectDB();


// express app create
const app = express();


// middleware
// JSON request ko JS object me convert karega
app.use(express.json());


// notes related routes
// final route -> /api/notes
app.use("/api/notes", noteRoutes);


// root route
app.get("/", (req, res) => {

  res.send("notes is running!");
});
app.get("/create-note", async(req, res) => {
  
const Note = require("./models/note");

const note = await Note.create({
  title: "browser note ",
  content: "created from broswer",

});
res.json(note);
});


// port
const PORT = process.env.PORT || 3000;


// server start
app.listen(PORT , () => {

  console.log(`Server is running on port ${PORT}`);
});