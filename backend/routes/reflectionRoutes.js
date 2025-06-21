const express = require('express');
const router = express.Router();
const Reflection = require('../models/Reflection');

router.post('/', async (req, res) => {
  try {
    const { reflection, userId } = req.body;
    const newReflection = new Reflection({ reflection, userId });
    await newReflection.save();
    res.status(201).json({ message: 'Reflection saved' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save reflection' });
  }
});

module.exports = router;




// GET reflections by user ID
router.get('/:userId', async (req, res) => {
  try {
    const reflections = await Reflection.find({ userId: req.params.userId })
      .sort({ createdAt: -1 });
    res.json(reflections);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reflections' });
  }
});

module.exports = router;