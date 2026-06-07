const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createBreastLog,
  getBreastLogs,
} = require("../controllers/breastController");

router.post("/", authMiddleware, createBreastLog);
router.get("/", authMiddleware, getBreastLogs);

module.exports = router;