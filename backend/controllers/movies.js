const Movie = require('../model/MoviesSchema')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')


// @desc        Create new movie
// @route       POST /api/movies
// @access      Public
exports.createMovie = asyncHandler(async (req, res, next) => {
        const movie = await Movie.create(req.body)

        res.status(201).json({
            success: true,
            data: movie
        })
})

// @desc        Get all movies
// @route       GET /api/movies
// @access      Public
exports.getMovies = asyncHandler(async (req, res, next) => {
        const movies = await Movie.find()

        res.status(200).json({
            success: true,
            data: movies
        })
})

// @desc    Fetch single movie
// @route   GET /api/movies/:id
// @access  Public
exports.getMovieById = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id)

    if (!movie) {
        next(new ErrorResponse(`Movie not found with id of ${req.params.id}`, 404))
    }
    
    res.status(200).json({
            success: true,
            data: movie
        })
})