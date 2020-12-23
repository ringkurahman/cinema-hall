const express = require('express')
const { createMovie, getMovies, getMovieById } = require('../controllers/movies')
const router = express.Router()


router.route('/').get(getMovies).post(createMovie)
router.route('/:id').get(getMovieById)

module.exports = router