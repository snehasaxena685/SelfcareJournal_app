const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
  try {
    const { name, mood } = req.body;
    const newUser = new User({ name, mood });
    await newUser.save();
    res.status(201).json({ message: 'User saved', userId: newUser._id });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save user' });
  }
});

module.exports = router;
