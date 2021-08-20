const express = require('express');
const router = express.Router();
const exam = require('./../model/exam.js');

/* POST new. */
router.post('/new', async function (req, res) {
	console.log('new', req.body)
    // Mongodb code
    await exam.create({
        name: req.body.name,
        questions: []
    }).catch(console.log)
    res.json({result : 'successful'})
});

router.get('/list',async function (req, res) {
    const exams = await exam.find()
    res.json(exams)
});

router.get('/questions/:id',async function (req, res) {
    const examId = req.params.id
    const result = await exam.findById(examId).sort('index')
    res.json(result.questions)
});

router.post('/add-question/:id',async function (req, res) {
    const examId = req.params.id
    const newQuestion = {
        index: req.body.index,
        question: req.body.question,
        answer: req.body.answer
    }
    const ex = await exam.findById(examId)
    ex.questions.push(newQuestion)
    ex.save()
    res.json({result: 'successful'})
});

module.exports = router;
