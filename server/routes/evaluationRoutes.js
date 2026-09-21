const express = require("express");

const router = express.Router();

const {
  evaluate,
} = require("../controllers/evaluationController");

const authMiddleware =
  require("../middleware/authMiddleware");

router.post(
  "/evaluate",
  authMiddleware,
  evaluate
);

module.exports = router;