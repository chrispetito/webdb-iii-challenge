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

router.get("/:id", (req, res) => {
  db.findById(req.params.id)
    .then(student => {
      if (student) {
        res.status(200).json(student);
      } else {
        res.status(404).json({ message: "Student not found" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  db.add(req.body)
    .then(student => {
      if (!name) {
        res.status(404).json({ message: "The name field is required." });
      } else {
        res.status(201).json(student);
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Could not add student" });
    });
});

router.put("/:id", (req, res) => {
  db.findById(req.params.id);
  db.update(req.params.id, req.body)
    .then(student => {
      if (student) {
        res.status(200).json({ message: "Succesfully updated." });
      } else {
        res.status(404).json({ message: "Student not found." });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  db.findById(req.params.id);
  db.remove(req.params.id)
    .then(student => {
      if (student) {
        res.status(200).json({ message: "Student successfully deleted." });
      } else {
        res.status(404).json({ message: "Student not found." });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
