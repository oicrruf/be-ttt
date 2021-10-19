const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const dotenv = require("dotenv");
const passport = require("passport");
const expressSession = require("express-session");

dotenv.config();

const database = require("./database");
const mongoose = require("mongoose");

mongoose.connect(database.uri);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(expressSession({ secret: "mySecretKey" }));
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World! 🤘");
});

// Initialize Passport
const initPassport = require("./passport/init");
initPassport(passport);

const routes = require("./routes")(passport);

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server en http://localhost:${port}`);
});
