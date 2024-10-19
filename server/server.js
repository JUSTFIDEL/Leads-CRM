import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import axios from 'axios'

const PORT = process.env.PORT || 8000

dotenv.config()

try {
  mongoose.connect(process.env.MONGODB_URI)
  console.log('connected to db.')
} catch (err) {
  console.log(err.message)
}

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Express-Async-Handler
// app.use((err, req, res, next) => {
//   res.status(500).send({ message: err.message })
// })

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
