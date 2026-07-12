const Review = require("../models/review.model");

exports.saveReview = async (req, res) => {
  try {
    const { language, code, review } = req.body;

    const savedReview = await Review.create({
      user: req.user.id,
      language,
      code,
      review,
    });

    res.status(201).json({
      success: true,
      review: savedReview,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      reviews,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    await Review.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};