const prisma = require("../config/prisma");

const createMood = async (req, res) => {
  try {
    const { mood, journal } = req.body;

    const moodLog = await prisma.moodLog.create({
      data: {
        mood,
        journal,
        userId: req.user.userId,
      },
    });

    res.status(201).json(moodLog);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

const getMoods = async (req, res) => {
  try {
    const moods = await prisma.moodLog.findMany({
      where: {
        userId: req.user.userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(moods);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createMood,
  getMoods,
};