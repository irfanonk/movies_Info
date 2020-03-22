import React, { Component } from 'react'
import { connect } from 'react-redux';
import {ListGroup} from 'react-bootstrap';
import {fetchMovie, setLoading} from '../../actions/searchAction';
import Spinner from '../layout/Spinner';


class Movie extends Component {
    
    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading()

        console.log('props:', this.props)
    }

    render() {
        //console.log('movie:',this.props.movie)
        const {loading, movie} = this.props
        
        let movieInfo = (
            <React.Fragment>
            <img src={movie.Poster} />
            <ListGroup>
                <ListGroup.Item>{movie.Title}</ListGroup.Item>
                <ListGroup.Item>{movie.Released}</ListGroup.Item>
                <ListGroup.Item>{movie.Actors}</ListGroup.Item>
                <ListGroup.Item>{movie.imdbRating }</ListGroup.Item>
                <ListGroup.Item>{movie.Plot}</ListGroup.Item>
                <ListGroup.Item>{movie.Production}</ListGroup.Item>
            </ListGroup> 
            </React.Fragment>
        )

         let content = loading ? <Spinner /> : movieInfo; 
        
        return (
            <div className="container">
                {content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log('ownprops:', ownProps)
    return{
    movie:state.movies.movie
}
} 

export default connect(mapStateToProps, { fetchMovie, setLoading})(Movie)
