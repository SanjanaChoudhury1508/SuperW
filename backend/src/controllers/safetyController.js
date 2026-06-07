const prisma = require("../config/prisma");

const createSafetyLog = async (req, res) => {
  try {
    const { status, notes } = req.body;

    const log = await prisma.safetyLog.create({
      data: {
        status,
        notes,
        userId: req.user.userId,
      },
    });

    res.status(201).json(log);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

const getSafetyLogs = async (req, res) => {
  try {
    const logs = await prisma.safetyLog.findMany({
      where: {
        userId: req.user.userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(logs);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createSafetyLog,
  getSafetyLogs,
};