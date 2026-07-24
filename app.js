const express = require("express");
const routes = require("./routes/routes.js");
const path = require("node:path");

const app = express();

app.set("views", path.join(dirname__, "views"));
app.set("view engine", "ejs");
