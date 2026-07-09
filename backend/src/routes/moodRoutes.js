const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createMood,
  getMoods,
  analyzeMood,
} = require("../controllers/moodController");

router.post("/", authMiddleware, createMood);
router.post(
  "/analyze",
  authMiddleware,
  analyzeMood
);
router.get("/", authMiddleware, getMoods);

module.exports = router;