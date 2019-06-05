const express = require("express");
const db = require("../models/students-model");

const router = express.Router();

router.get("/", (req, res) => {
  db.find().then(students =>
    res
      .status(200)
      .json(students)
      .catch(err => res.status(500).json(err))
  );
});

module.exports = router;