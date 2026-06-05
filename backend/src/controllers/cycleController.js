const prisma = require("../config/prisma");

// Create Cycle
const createCycle = async (req, res) => {
  try {
    const { startDate, endDate, flowLevel, symptoms, notes } = req.body;

    const cycle = await prisma.cycle.create({
      data: {
        userId: req.user.userId,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        flowLevel,
        symptoms,
        notes,
      },
    });

    res.status(201).json(cycle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get All User Cycles
const getCycles = async (req, res) => {
  try {
    const cycles = await prisma.cycle.findMany({
      where: {
        userId: req.user.userId,
      },
      orderBy: {
        startDate: "desc",
      },
    });

    res.json(cycles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Single Cycle
const getCycleById = async (req, res) => {
  try {
    const cycle = await prisma.cycle.findFirst({
      where: {
        id: req.params.id,
        userId: req.user.userId,
      },
    });

    if (!cycle) {
      return res.status(404).json({
        message: "Cycle not found",
      });
    }

    res.json(cycle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update Cycle
const updateCycle = async (req, res) => {
  try {
    const cycle = await prisma.cycle.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });

    res.json(cycle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete Cycle
const deleteCycle = async (req, res) => {
  try {
    await prisma.cycle.delete({
      where: {
        id: req.params.id,
      },
    });

    res.json({
      message: "Cycle deleted",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createCycle,
  getCycles,
  getCycleById,
  updateCycle,
  deleteCycle,
};