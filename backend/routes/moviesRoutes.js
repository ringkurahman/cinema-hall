import express from 'express'
const router = express.Router()
import { createMovie, getMovies, getMovieById } from '../controllers/movies.js'


router.route('/').get(getMovies).post(createMovie)
router.route('/:id').get(getMovieById)

export default router