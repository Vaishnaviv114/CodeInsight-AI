const express = require("express");

const router = express.Router();

const { auth } = require("../middlewares/auth.middleware");

const {
  saveReview,
  getReviews,
  deleteReview,
} = require("../controllers/review.controller");

console.log("Review Route Loaded");

router.post("/", auth, saveReview);

router.get("/", auth, getReviews);

router.delete("/:id", auth, deleteReview);

module.exports = router;