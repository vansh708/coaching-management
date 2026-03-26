const Student = require('../models/Student');
const User = require('../models/User');

// @desc    Get all students
// @route   GET /api/students
// @access  Private/Admin
const getStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('user', 'name email');
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add a student (Admin can add directly)
// @route   POST /api/students
// @access  Private/Admin
const addStudent = async (req, res) => {
    const { name, email, password, contactNumber, courses } = req.body;

    try {
        let userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            role: 'student'
        });

        if (user) {
            const student = await Student.create({
                user: user._id,
                contactNumber: contactNumber || '',
                courses: courses || []
            });

            res.status(201).json(student);
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Delete student
// @route   DELETE /api/students/:id
// @access  Private/Admin
const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (student) {
            await User.findByIdAndDelete(student.user);
            await Student.findByIdAndDelete(req.params.id);
            res.json({ message: 'Student removed' });
        } else {
            res.status(404).json({ message: 'Student not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get student details for logged in student
// @route   GET /api/students/me
// @access  Private/Student
const getStudentDetails = async (req, res) => {
    try {
        const student = await Student.findOne({ user: req.user._id }).populate('user', 'name email');

        if (student) {
            res.json(student);
        } else {
            res.status(404).json({ message: 'Student profile not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get student courses & notes
// @route   GET /api/students/me/courses
// @access  Private/Student
const getStudentCourses = async (req, res) => {
    try {
        const student = await Student.findOne({ user: req.user._id });

        if (student) {
            res.json({ courses: student.courses, notes: student.notes });
        } else {
            res.status(404).json({ message: 'Student profile not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getStudents,
    addStudent,
    deleteStudent,
    getStudentDetails,
    getStudentCourses
};
