import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../Loader'
import Message from '../Message'
import Movie from '../Movie'
import { listMovies } from '../../actions/movieAction'




const HomeScreen = () => {
    
    const dispatch = useDispatch()
    const movieList = useSelector(state => state.movieList)
    const { loading, error, movies } = movieList

    useEffect(() => {
        dispatch(listMovies())

    }, [dispatch])

    return (
        <>
            {
                loading ?
                    <Loader /> : error ? <Message variant="danger">{error}</Message>
                        : (
                            <>  
                                <Row>
                                    {movies.map((movie) => (
                                        <Col key={movie._id} sm={12} md={6} lg={4} xl={3}>
                                            <Movie movie={movie} />
                                        </Col>
                                    ))}
                                </Row>
                            </>
                            
                        )
            }
        </>
    );
};

export default HomeScreen