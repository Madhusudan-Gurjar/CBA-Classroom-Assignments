const express = require("express");
const router = express.Router();

// In-memory storage
let courses = [];

/*
Course Object Structure:
{
   courseId: number,
   courseName: string,
   duration: string
}
*/

//
// 1️ Add Course
//
router.post("/", (req, res) => {

    const { courseId, courseName, duration } = req.body;

    if (!courseId || !courseName || !duration) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const existingCourse = courses.find(c => c.courseId === courseId);

    if (existingCourse) {
        return res.status(400).json({ message: "Course ID already exists" });
    }

    const newCourse = { courseId, courseName, duration };
    courses.push(newCourse);

    res.status(201).json({
        message: "Course added successfully",
        course: newCourse
    });
});

//
// 2️ List All Courses
//
router.get("/", (req, res) => {
    res.json(courses);
});

//
// 3️ Update Course
//
router.put("/:id", (req, res) => {

    const courseId = parseInt(req.params.id);
    const { courseName, duration } = req.body;

    const course = courses.find(c => c.courseId === courseId);

    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }

    if (courseName) course.courseName = courseName;
    if (duration) course.duration = duration;

    res.json({
        message: "Course updated successfully",
        course
    });
});

//
// 4️ Delete Course
//
router.delete("/:id", (req, res) => {

    const courseId = parseInt(req.params.id);

    const courseIndex = courses.findIndex(c => c.courseId === courseId);

    if (courseIndex === -1) {
        return res.status(404).json({ message: "Course not found" });
    }

    const deletedCourse = courses.splice(courseIndex, 1);

    res.json({
        message: "Course deleted successfully",
        course: deletedCourse[0]
    });
});

module.exports = router;