const express = require("express");
const mongoose = require("mongoose");
const routes = require("./app/routes/routers");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(cors());

app.use("/", routes());

mongoose
  .connect(process.env.DB_CONN)
  .then(_ => console.log("connected to db"))
  .catch(err => console.error(err));

module.exports = app;
