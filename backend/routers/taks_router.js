const express = require('express');
const router = express.Router();
const Task = require('../models/task_model.js');
const count  = require('../models/count_model.js');


// GET all tasks
router.get('/', (req, res) => {
    Task.find({}, (err, tasks) => {
        if(err) {
            res.send(err);
        }
        res.json(tasks);
    });
});

//add
router.post('/add', (req, res) => {
    // increment add_count
    count.findOneAndUpdate({}, {$inc: {add_count: 1}})
    Task.create(req.body, (err, task) => {
        if(err) {
            res.send(err);
        }
        res.json(task);
    });
});

//update
router.put('/:id', (req, res) => {
    // increment update_count
    count.findOneAndUpdate({}, {$inc: {update_count: 1}})
    Task.findByIdAndUpdate(req.params.id, req.body, (err, task) => {
        if(err) {
            res.send(err);
        }
        res.json(task);
    });
});


//get count
router.get('/count', (req, res) => {
    count.find({}, (err, count) => {
        if(err) {
            res.send(err);
        }
        res.json(count);
    });
});

