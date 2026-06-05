const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createCycle,
  getCycles,
  getCycleById,
  updateCycle,
  deleteCycle,
} = require("../controllers/cycleController");

router.post("/", protect, createCycle);
router.get("/", protect, getCycles);
router.get("/:id", protect, getCycleById);
router.put("/:id", protect, updateCycle);
router.delete("/:id", protect, deleteCycle);

module.exports = router;