const express = require('express');
const router = express.Router();
const { getStudents, addStudent, deleteStudent, getStudentDetails, getStudentCourses } = require('../controllers/studentController');
const { protect, admin } = require('../middleware/authMiddleware');

// Admin routes
router.route('/')
    .get(protect, admin, getStudents)
    .post(protect, admin, addStudent);

router.route('/:id')
    .delete(protect, admin, deleteStudent);

// Student routes
router.get('/me/details', protect, getStudentDetails);
router.get('/me/courses', protect, getStudentCourses);

module.exports = router;
