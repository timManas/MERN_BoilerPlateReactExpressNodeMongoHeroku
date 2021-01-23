import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const PORT = 5000

// Initialize Dot Env File
dotenv.config()

// Initialize Express
const app = express()

// Initialize MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1) // exit(1) - means you return with error
  }
}

// Connect Backend to MongoDB
connectDB()

// Initialize the Routes
app.get('/', (req, res) => {
  res.send('API is running')
})

// Set up backend to listen to PORT 5000
app.listen(PORT, console.log('Server is running on PORT 5000'))
