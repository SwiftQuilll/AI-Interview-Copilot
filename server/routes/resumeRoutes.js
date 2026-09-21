const express = require("express");
const router = express.Router();

const upload = require("../config/multer");
const protect = require("../middleware/authMiddleware");

const {
  uploadResume,
  getResumeHistory,
} = require("../controllers/resumeController");

router.post(
  "/upload",
  protect,
  upload.single("resume"),
  uploadResume
);

router.get(
  "/history",
  protect,
  getResumeHistory
);

module.exports = router;