const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const cycleRoutes = require("./routes/cycleRoutes");
const symptomRoutes = require("./routes/symptomRoutes");
const moodRoutes = require("./routes/moodRoutes");
const workoutRoutes = require("./routes/workoutRoutes");
const mealRoutes = require("./routes/mealRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cycles", cycleRoutes);
app.use("/api/symptoms", symptomRoutes);
app.use("/api/moods", moodRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api/meals", mealRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "SuperW Backend Running"
  });
});

module.exports = app;