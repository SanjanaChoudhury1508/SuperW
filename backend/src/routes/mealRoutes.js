const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createMeal,
  getMeals,
} = require("../controllers/mealController");

router.post("/", authMiddleware, createMeal);
router.get("/", authMiddleware, getMeals);

module.exports = router;