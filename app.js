const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();

console.log(process.env.MONGO_URI);

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("notes is running!");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
});