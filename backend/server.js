const path = require ('path')
const express = require('express')
const movies = require('./routes/moviesRoutes')
const dotenv = require('dotenv')
dotenv.config({ path: '../.env' })
const morgan = require('morgan')
const errorHandler = require('./middleware/error')
const colors = require('colors')
const connectDB = require('./config/db')


// Connect dotenv
dotenv.config()

// Connect Database
connectDB()

const app = express()

// Body Parser
app.use(express.json())

// Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Mount router
app.use('/api/movies', movies)


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
