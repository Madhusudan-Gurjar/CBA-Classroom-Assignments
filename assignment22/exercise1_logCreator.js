// Exercise 1: Log File Creator (Server Logging System)

// Import required modules
const fs = require("fs");
const path = require("path");

// Create logs folder path using path.join()
const logsFolderPath = path.join(__dirname, "logs");

// Check if logs folder exists
if (!fs.existsSync(logsFolderPath)) {
    fs.mkdirSync(logsFolderPath);
}

// Get today's date (YYYY-MM-DD format)
const today = new Date().toISOString().split("T")[0];

// Create file path inside logs folder
const logFilePath = path.join(logsFolderPath, `${today}.txt`);

// Append log message
fs.appendFileSync(logFilePath, "Server started successfully\n");

console.log("Log file updated successfully:", logFilePath);