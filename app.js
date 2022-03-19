/** @format */

const express = require("express");
require("dotenv").config();

const app = express();
const morgan = require("morgan");
const cookiParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

//Swagger  DOCUMENTATION ....
//for swagger documentation
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// temp check
app.set("view engine", "ejs");

//regular Middleware ....
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookies and file middleware ....
app.use(cookiParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//Morgan Middleware ....
app.use(morgan("tiny"));

//IMPORT all routes here ....
const home = require("./routes/home");
const user = require("./routes/user");
const product = require("./routes/product");
const payment = require("./routes/payment");
const order = require("./routes/order");

//router middleware ....
app.use("/api/v1", home);
app.use("/api/v1", user);
app.use("/api/v1", product);
app.use("/api/v1", payment);
app.use("/api/v1", order);

app.get("/signuptest", (req, res) => {
  res.render("signuptest");
});

app.get("/logintest", (req, res) => {
  res.render("logintest");
});

//EXPORT app JS ....
module.exports = app;
