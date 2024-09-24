const express = require("express");
const app = express();
const connectDB = require("./database/connection");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const blog = require("./routes/blogRoutes");
const user = require("./routes/userRoutes");

const cloudinary = require("cloudinary");
if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "./config/.env",
  });
}

const corsConfig = {
  origin: process.env.Client_URL,
  credentials: true,
  method: ["GET", "POST", "PUT", "DELETE"],
};

app.options("", cors(corsConfig));
app.use(cors(corsConfig));
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// routes defined

app.use("/api/blog", blog);
app.use("/api/user", user);
connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.listen(process.env.PORT, () => {
  try {
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});
