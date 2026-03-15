const mongoose = require('./database')

const assignmentSchema = new mongoose.Schema({
    filename: String,
    uploadDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Assignment', assignmentSchema)