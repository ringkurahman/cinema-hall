import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'


const Movie = ({ movie }) => {

    return (
        <Card className='my-3 p-2 rounded'>
            <Link to={`/moviedetails/${movie._id}`}>
                <Card.Img src={movie.photo} variant='top' />
            </Link>
            <Card.Body>
              <Link to={`/moviedetails/${movie._id}`}>
                <Card.Title as='div'>
                    <strong>{movie.name}</strong>
                </Card.Title>
                </Link>
                <Card.Title as='div'>
                    <strong>{movie.directedBy}</strong>
                </Card.Title>
                <Card.Text as='div'>
                    <Rating
                        value={movie.rating}
                        text={`${movie.averageRating} reviews`}>
                    </Rating>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Movie