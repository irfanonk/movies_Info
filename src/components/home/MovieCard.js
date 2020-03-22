import React, { Component } from 'react'
import {Card, CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class MovieCard extends Component {
    render() {
        const {movie} = this.props
        //console.log('movie:', movie)
        return (
            // <div className="container">
            //   <Card style={{ width: '18rem' }}>
            //         <Card.Img variant="top" src={movie.Poster} />
            //         <Card.Body>
            //             <Card.Title>{movie.Title} - {movie.Year}</Card.Title>
            //             <Button variant="primary">Details</Button>
            //         </Card.Body>
            //     </Card>
            // </div>
            <CardGroup>
            <Card>
              <Link to={`/movie/${movie.imdbID}`}>
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title} - {movie.Year}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted"></small>
              </Card.Footer>
              </Link>
            </Card>
          </CardGroup>
        )
    }
}
// const mapStateToProps = () => ({
//     movie:state
// })

