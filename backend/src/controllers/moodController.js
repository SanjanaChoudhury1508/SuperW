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
const analyzeMood = async (req, res) => {
  const { message } = req.body;

  let mood = "Calm";

  const text = message.toLowerCase();

  if (
    text.includes("stress") ||
    text.includes("anxious") ||
    text.includes("overwhelmed")
  ) {
    mood = "Stressed";
  } else if (
    text.includes("happy") ||
    text.includes("excited")
  ) {
    mood = "Happy";
  } else if (
    text.includes("sad") ||
    text.includes("cry")
  ) {
    mood = "Sad";
  } else if (
    text.includes("tired") ||
    text.includes("exhausted")
  ) {
    mood = "Tired";
  }

  const moodLog = await prisma.moodLog.create({
  data: {
    userId: req.user.userId,
    mood,
    journal: message,
  },
});

  res.json({
    mood,
    response: `You seem to be feeling ${mood}. Take care of yourself and don't hesitate to rest if needed.`,
  });
};

module.exports = {
  createMood,
  getMoods,
  analyzeMood,
}