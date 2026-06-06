const prisma = require("../config/prisma");

const createMeal = async (req, res) => {
  try {
    const { meal, calories } = req.body;

    const log = await prisma.mealLog.create({
      data: {
        meal,
        calories: calories ? Number(calories) : null,
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

const getMeals = async (req, res) => {
  try {
    const logs = await prisma.mealLog.findMany({
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
  createMeal,
  getMeals,
};