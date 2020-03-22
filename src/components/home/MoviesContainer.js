import React, { Component } from 'react'
import {connect} from 'react-redux';

import MovieCard from './MovieCard';



export class MoviesContainer extends Component {

    render() {
        const movies = this.props.movies;
        let content = '';   

        //console.log('prop:', typeof(this.props.movies))
        console.log('movies:', movies)

        //check if there are movies in movies array
        //is so return MovieCard, otherwise return null
        content = movies.Response == "True" 
        ? movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />) 
        : <div style={{color:"red"}}> {movies.Error} </div>;
        //console.log('content after:', content)
        
        return (
            <div className="row"> 
                {content}
            </div>
        )
    }
    
}

const mapStateTProps = state => ({
    movies: state.movies.movies
})
export default connect(mapStateTProps)(MoviesContainer)