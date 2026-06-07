const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createSafetyLog,
  getSafetyLogs,
} = require("../controllers/safetyController");

router.post("/", authMiddleware, createSafetyLog);
router.get("/", authMiddleware, getSafetyLogs);

module.exports = router;