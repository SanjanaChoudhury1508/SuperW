const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createMood,
  getMoods,
} = require("../controllers/moodController");

router.post("/", authMiddleware, createMood);
router.get("/", authMiddleware, getMoods);

module.exports = router;