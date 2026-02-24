const express = require("express");
const courseRoutes = require("./routes/courseRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/courses", courseRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});