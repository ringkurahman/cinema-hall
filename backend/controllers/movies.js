import Movie from '../model/MoviesSchema.js'

import asyncHandler from '../middleware/async.js'


// @desc        Create new movie
// @route       POST /api/movies
// @access      Public
const createMovie = asyncHandler(async (req, res, next) => {
        const movie = await Movie.create(req.body)

        res.status(201).json({
            success: true,
            data: movie
        })
})

// @desc        Get all movies
// @route       GET /api/movies
// @access      Public
const getMovies = asyncHandler(async (req, res, next) => {
        const movies = await Movie.find()

        res.status(200).json({
            success: true,
            data: movies
        })
})

// @desc    Fetch single movie
// @route   GET /api/movies/:id
// @access  Public
const getMovieById = asyncHandler(async (req, res) => {
    const movie = await Movie.findById(req.params.id)

    
    
    res.status(200).json({
            success: true,
            data: movie
        })
})

export { createMovie, getMovies, getMovieById }