const prisma = require("../config/prisma");

// Create symptom log
const createSymptom = async (req, res) => {
  try {
    const { symptom } = req.body;

    const log = await prisma.symptomLog.create({
      data: {
        symptom,
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

// Get user's symptoms
const getSymptoms = async (req, res) => {
  try {
    const logs = await prisma.symptomLog.findMany({
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

// Delete symptom
const deleteSymptom = async (req, res) => {
  try {
    await prisma.symptomLog.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      message: "Deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

module.exports = {
  createSymptom,
  getSymptoms,
  deleteSymptom,
};