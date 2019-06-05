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
    db.findById(req.params.id).then(student => {
      res
        .status(200)
        .json(student)
        .catch(err => {
          res.status(500).json(err);
        });
    });
  });

  router.post("/", (req, res) => {
    db.add(req.body)
      .then(() => {
        res
          .status(201)
          .json({ message: "You have successfully added a student!" });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  router.put("/:id", (req, res) => {
    db.update(req.params.id, req.body)
      .then(() => {
        res.status(200).json({ message: "Succesfully updated." });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  router.delete("/:id", (req, res) => {
    db.remove(req.params.id)
      .then(() => {
        res.status(200).json({ message: "Student successfully deleted." });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  

module.exports = router;