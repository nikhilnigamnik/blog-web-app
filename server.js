const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// import router

const userRoutes = require("./routes/userRoutes");

const blogRoutes = require("./routes/blogRoutes");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// home route

app.get("/", (req, res) => {
  res.send("API is running");
});

// use router

app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
