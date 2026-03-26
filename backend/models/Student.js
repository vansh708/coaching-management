const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    contactNumber: {
        type: String,
        required: [true, 'Please add a contact number']
    },
    courses: [{
        type: String
    }],
    notes: [{
        title: String,
        content: String,
        dateAdded: { type: Date, default: Date.now }
    }],
    joinDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
