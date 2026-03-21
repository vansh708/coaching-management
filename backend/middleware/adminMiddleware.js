const Student = require("../models/students");

const adminOnly = async (req, res, next) => {
  try {
    const user = await Student.findById(req.user.id);

    if (user && user.role === "admin") {
      next(); // ✅ allowed
    } else {
      return res.status(403).json({ msg: "Admin access only" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = adminOnly;
