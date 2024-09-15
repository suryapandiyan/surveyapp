const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { surveys } = require('../models/survey');

// Get all surveys
router.get('/', authMiddleware, (req, res) => {
    res.json(surveys);
});

// Create a new survey
router.post('/', authMiddleware, (req, res) => {
    const { title, questions } = req.body;
    const newSurvey = { id: surveys.length + 1, title, questions, user: req.user.username };
    surveys.push(newSurvey);
    res.status(201).json(newSurvey);
});

// Get survey by ID
router.get('/:id', authMiddleware, (req, res) => {
    const survey = surveys.find(s => s.id === parseInt(req.params.id));
    if (!survey) return res.status(404).json({ message: 'Survey not found' });
    res.json(survey);
});

// Update survey
router.put('/:id', authMiddleware, (req, res) => {
    const survey = surveys.find(s => s.id === parseInt(req.params.id));
    if (!survey) return res.status(404).json({ message: 'Survey not found' });

    const { title, questions } = req.body;
    survey.title = title || survey.title;
    survey.questions = questions || survey.questions;
    res.json(survey);
});

// Delete survey
router.delete('/:id', authMiddleware, (req, res) => {
    const index = surveys.findIndex(s => s.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Survey not found' });

    surveys.splice(index, 1);
    res.json({ message: 'Survey deleted' });
});

module.exports = router;
