import React, { useEffect } from 'react'
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listMovieDetails } from '../../actions/movieAction'
import Rating from '../Rating'




const MovieDetailScreen = ({ match }) => {

    const dispatch = useDispatch()
    const movieDetails = useSelector(state => state.movieDetails)
    const { loading, error, movie } = movieDetails

    console.log(movie)

    useEffect(() => {
        dispatch(listMovieDetails(match.params.id))
    }, [dispatch, match])

    const handleBooking = () => {
        console.log('Clicked book')
    }
    
    return (
        <>
            <Row>
                    <Col md={6}>
                        <Image src={movie.photo} alt={movie.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{movie.name}</h3>
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                                Directed By: {movie.directedBy}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating
                                    value={movie.rating}
                                    text={`${movie.averageRating} reviews`}>
                                </Rating>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Description: {movie.description}
                        </ListGroup.Item>
                        
                        <ListGroup.Item>
                                Show Time: {movie.showTime}
                        </ListGroup.Item>

                        <ListGroup.Item>
                                Available Seats: {movie.availableSeats}
                        </ListGroup.Item>
                        
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                    Booking Form
                                </ListGroup.Item>
                            
                                <ListGroup.Item>
                                    <Button
                                        onClick={handleBooking}
                                        className='btn-block rounded'
                                        type='button'
                                        >
                                        Book Now
                                </Button>
                                </ListGroup.Item>

                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
        </>
    )
}

export default MovieDetailScreen