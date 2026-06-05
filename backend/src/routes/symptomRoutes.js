const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createSymptom,
  getSymptoms,
  deleteSymptom,
} = require("../controllers/symptomController");

router.post("/", protect, createSymptom);
router.get("/", protect, getSymptoms);
router.delete("/:id", protect, deleteSymptom);

module.exports = router;