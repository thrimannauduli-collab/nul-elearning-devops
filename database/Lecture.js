const mongoose = require('./database')

const lectureSchema = new mongoose.Schema({
    title: String,
    lecturer: String
})

module.exports = mongoose.model('Lecture', lectureSchema)