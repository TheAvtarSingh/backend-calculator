// Express
import express from "express";

// Router
const router = express.Router();

// Models
import Data from "../models/Data.js";

// Routes
router.post("/addData", async (req, res) => {
  let operation = req.body.operation;
  let description = req.body.description;
  let resultString = req.body.resultString;
  try {
    let calculatorData = await Data.findOne({ description });
    if (!calculatorData) {
      await Data.create({
        operation: operation,
        description: description,
        resultString: resultString,
      });
      res.json({ success: true });
    } else {
      res.status(400).json({
        errors: "Data with Same Description Already Exists",
      });
    }
  } catch (error) {
    res.json({ success: false });
  }
});

router.get("/getData", async (req, res) => {
  try {
    const completeData = await Data.find({});
    res.send(completeData);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/deleteData", async (req, res) => {
  try {
    const deleteData = await Data.deleteMany({});
    res.send(deleteData);
  } catch (err) {
    res.send(err);
  }
});

export default router;
