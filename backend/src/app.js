const express = require('express');
const aiRoutes = require("./routes/ai.routes");
const cors = require('cors');
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

const app = express();
console.log("App Loaded");

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/ai", aiRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;