const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const Student = require("../models/students");

// Dashboard route
router.get("/dashboard", protect, async (req, res) => {
  const student = await Student.findById(req.user.id).select("-password");
  res.json(student);
});

module.exports = router;
