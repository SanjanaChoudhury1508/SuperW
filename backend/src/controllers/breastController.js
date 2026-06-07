const prisma = require("../config/prisma");

const createBreastLog = async (req, res) => {
  try {
    const { status, notes } = req.body;

    const log = await prisma.breastLog.create({
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

const getBreastLogs = async (req, res) => {
  try {
    const logs = await prisma.breastLog.findMany({
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
  createBreastLog,
  getBreastLogs,
};