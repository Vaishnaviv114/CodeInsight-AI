const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

// Register User
router.post("/register", authController.register);

// Login User
router.post("/login", authController.login);

module.exports = router;