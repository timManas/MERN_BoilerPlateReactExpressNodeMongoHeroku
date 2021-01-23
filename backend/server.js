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
// app.get('/', (req, res) => {
//   res.send('API is running')
// })

// RUN THIS ONLY IN PRODUCTION MODE
if (process.env.NODE_ENV === 'production') {
  // Set the 'build' folder as a static folder
  // Why ? So we can access the build folder and load the index.html
  app.use(express.static(path.join(__dirname, '/frontend/build'))) // set frontend folder as a static folder

  // Send the index.html file if on Production
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running ....')
  })
}

// Set up backend to listen to PORT 5000
app.listen(PORT, console.log('Server is running on PORT 5000'))
