require("dotenv").config
const express = require("express");
const cors = require("cors");
const connect = require("./Config/db")
const app = express()

app.use(cors())
app.use(express.json())

//connect MongoDB
connect()

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Mobile Store API is running",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log(`Server Running on port ${PORT}`);
});