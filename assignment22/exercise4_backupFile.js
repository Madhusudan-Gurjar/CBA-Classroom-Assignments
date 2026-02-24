// Exercise 4: Backup Existing File Before Editing

const fs = require("fs");
const path = require("path");

// File path
const filePath = path.join(__dirname, "data.txt");

// Check if file exists
if (fs.existsSync(filePath)) {

    // Parse file path
    const parsed = path.parse(filePath);

    // Generate backup file name dynamically
    const backupFilePath = path.format({
        dir: parsed.dir,
        name: parsed.name + "_backup",
        ext: parsed.ext
    });

    // Copy original file to backup
    fs.copyFileSync(filePath, backupFilePath);

    console.log("Backup created:", backupFilePath);

    // Update original file
    fs.writeFileSync(filePath, "Updated content after backup.");

    console.log("Original file updated.");

} else {

    // Create file with default content
    fs.writeFileSync(filePath, "Default content created.");

    console.log("File created with default content.");
}