const express = require("express");
const Emotion = require("../models/emotion");
const router = express.Router();

// Registrar emoción
router.post("/", async (req, res) => {
  const { emotion } = req.body;
  try {
    const newEmotion = new Emotion({ emotion });
    await newEmotion.save();
    res.status(201).json(newEmotion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener todas las emociones
router.get("/", async (req, res) => {
  try {
    const emotions = await Emotion.find();
    res.status(200).json(emotions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
