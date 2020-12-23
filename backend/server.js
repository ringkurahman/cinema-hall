import path from 'path'
import express from 'express'
import movies from './routes/moviesRoutes.js'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import errorHandler from './middleware/error.js'


// Connect dotenv
dotenv.config()

// Connect Database
connectDB()

const app = express()

// Body Parser
app.use(express.json())

// Middleware
if (process.env.NODE_ENV === 'production') {
    app.use(morgan('dev'))
}

// Mount router
app.use('/api/movies', movies)


const __dirname = path.resolve()
// Create static build folder and access index.html file
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))

} else {
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}

// Error Handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen( 
    PORT, console.log(`Server listening in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)

// Handle unhandled rejection from database
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    // Close server and exit process
    server.close(() => process.exit(1))
})
