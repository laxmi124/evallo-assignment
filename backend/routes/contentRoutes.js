const express = require('express');
const router = express.Router();
const Content = require('../models/content');

router.post('/', async (req, res) => {
  try {
    const { title, description, mockFile } = req.body;
    const content = new Content({ title, description, mockFile });
    await content.save();
    res.status(201).json({ message: 'Content submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const contents = await Content.find();
    res.status(200).json(contents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
