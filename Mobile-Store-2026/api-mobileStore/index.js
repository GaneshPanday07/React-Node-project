require("dotenv").config();

const express = require("express");
const connect = require("./config/db");
const mobile = require("./Routers/MobileRouters");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(mobile);

connect();

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
