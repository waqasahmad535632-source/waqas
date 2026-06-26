const express = require('express');
const router  = express.Router();
const Project = require('../models/Project');

// GET /api/projects
router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.find();
    return res.json(projects);
  } catch (err) {
    next(err);
  }
});

// POST /api/projects
router.post('/', async (req, res, next) => {
  try {
    const { title, description, technologies, status, githubLink, liveLink } = req.body;
    const project = await Project.create({ title, description, technologies, status, githubLink, liveLink });
    return res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
