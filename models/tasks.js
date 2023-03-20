const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    taskName: {
        required: true,
        type: String
    },
    taskDescription: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Task', dataSchema)