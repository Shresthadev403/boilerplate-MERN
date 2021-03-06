const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

// importing routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const docsRoutes = require("./routes/docs");

let app = express();

// for reading enviroment variables
dotenv.config();

// for mongoose connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", (err) => {
  console.log("err:", err.message);
});
mongoose.connection.on("open", () => {
  console.log("Connected to MongoDB database.");
});

//using middlewares
app.use(morgan("dev")); // used for coloured status code token for development use
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//for routes
app.use("/", authRoutes);
app.use("/", userRoutes);
app.use("/", docsRoutes);

// listening on port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`app listening om port ${port}...`);
});
