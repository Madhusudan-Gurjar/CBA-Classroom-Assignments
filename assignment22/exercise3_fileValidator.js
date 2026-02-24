// Exercise 3: File Extension Validator (Upload Security)

const path = require("path");

// Example filename (change to test)
const fileName = "resume.pdf";

// Extract file extension
const ext = path.extname(fileName).toLowerCase();

// Allowed file types
const allowedExtensions = [".jpg", ".png", ".pdf"];

// Validate file extension
if (allowedExtensions.includes(ext)) {
    console.log("File Accepted");
} else {
    console.log("Invalid File Type");
}