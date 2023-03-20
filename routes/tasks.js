const express = require('express');
const router = express.Router()

const TaskModel = require('../models/tasks')

// Get all Tasks List Api with Get Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await TaskModel.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Create Task Api with Post Method
router.post('/post', async (req, res) => {
    const data = new TaskModel({
        taskName: req.body.taskName,
        taskDescription: req.body.taskDescription
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// Update Task with Patch Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await TaskModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete Task with delete method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await TaskModel.findByIdAndDelete(id)
        res.send({message:`Document with ${data.taskName} has been deleted..`})
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router;