const express = require('express');
const router = express.Router();
const { runMLModel } = require('../services/mlService');
const { runLLM } = require('../services/llmService');

router.post('/predict', async (req, res) => {
  const result = await runMLModel(req.body.text);
  res.json({ prediction: result });
});

router.post('/generate', async (req, res) => {
  const result = await runLLM(req.body.text);
  res.json({ advice: result });
});

module.exports = router;
