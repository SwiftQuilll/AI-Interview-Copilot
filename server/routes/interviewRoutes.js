const express = require("express");

const router = express.Router();

const {
  createQuestions,
} = require("../controllers/interviewController");

const authMiddleware =
  require("../middleware/authMiddleware");

router.post(
  "/generate",
  authMiddleware,
  createQuestions
);

module.exports = router;