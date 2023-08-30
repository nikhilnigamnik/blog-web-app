const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());

mongoose.connect(
  "mongodb+srv://niknigam:ylMED40Ync0QHJgY@cluster0.rikes8c.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const imageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String,
});

const Image = mongoose.model("Image", imageSchema);

app.use(express.json());

const storage = multer.memoryStorage(); // Store images in memory

const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const newImage = new Image({
      name: req.file.originalname,
      data: req.file.buffer,
      contentType: req.file.mimetype,
    });

    await newImage.save();
    res.status(201).send("Image uploaded successfully!");
  } catch (error) {
    res.status(500).send("Error uploading image.");
  }
});

app.get("/image/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).send("Image not found.");
    }

    res.setHeader("Content-Type", image.contentType);
    res.send(image.data);
  } catch (error) {
    res.status(500).send("Error fetching image.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
