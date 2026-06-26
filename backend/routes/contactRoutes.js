const express = require('express');
const router  = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact
router.post('/', async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }
    const contact = await Contact.create({ name, email, message });
    return res.status(201).json({ success: true, message: 'Message received!', data: contact });
  } catch (err) {
    next(err);
  }
});

// GET /api/contact
router.get('/', async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: messages });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
