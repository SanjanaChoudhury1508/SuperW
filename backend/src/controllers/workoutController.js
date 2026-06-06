const prisma = require("../config/prisma");

const createWorkout = async (req, res) => {
  try {
    const { workout, duration } = req.body;

    const log = await prisma.workoutLog.create({
      data: {
        workout,
        duration: Number(duration),
        userId: req.user.userId,
      },
    });

    res.status(201).json(log);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getWorkouts = async (req, res) => {
  try {
    const logs = await prisma.workoutLog.findMany({
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
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createWorkout,
  getWorkouts,
};