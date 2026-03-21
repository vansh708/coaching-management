const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

const Student = require("../models/students");
const bcrypt = require("bcryptjs");

// 👑 Add Student (only admin)
router.post("/add-student", protect, adminOnly, async (req, res) => {
  try {
    const { name, email, password, course } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await Student.create({
      name,
      email,
      password: hashedPassword,
      course,
    });

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// 👀 Get all students (admin only)
router.get("/students", protect, adminOnly, async (req, res) => {
  try {
    const students = await Student.find().select("-password");
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// ❌ Delete student
router.delete("/delete-student/:id", protect, adminOnly, async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student Deleted ✅" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
