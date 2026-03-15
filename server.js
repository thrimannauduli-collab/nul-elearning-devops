const express = require('express')
const cors = require('cors')
const multer = require('multer')

require('./database/database')

const Lecture = require('./database/Lecture')
const Assignment = require('./database/Assignment')


const fs = require('fs')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

// file upload configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage })

// API to get lectures
app.get('/api/lectures', (req, res) => {

  const lectures = JSON.parse(fs.readFileSync('lectures.json'))

  res.json(lectures)

})

// API to upload assignment
app.post('/api/upload', upload.single('assignment'), (req, res) => {

  res.json({
    message: "Assignment uploaded successfully",
    file: req.file.filename
  })

})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})