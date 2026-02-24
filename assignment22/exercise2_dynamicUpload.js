// Exercise 2: Dynamic File Upload Storage Path

const fs = require("fs");
const path = require("path");

// Example userId
const userId = "user123";

// Create uploads/userId folder path
const userFolderPath = path.join(__dirname, "uploads", userId);

// Create directory if not exists (recursive: true)
fs.mkdirSync(userFolderPath, { recursive: true });

// Create dummy file inside user folder
const filePath = path.join(userFolderPath, "profile.txt");

fs.writeFileSync(filePath, "This is a dummy profile file.");

// Print absolute path
const absolutePath = path.resolve(filePath);
console.log("File saved at:", absolutePath);