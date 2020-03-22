import React from "react";
import {connect} from 'react-redux';

import {searchMovie, fetchMovies, setLoading} from '../../actions/searchAction';


class SearchForm extends React.Component {

    //we take the value and pass it to action
    //we set text state into the action payload 
    onChange = e => {
        //console.log('onChange:', e.target.value)
        this.props.searchMovie(e.target.value)
    } 

    onSubmit = e => {
        e.preventDefault();
        //we can use state that is in mapStateToProps
        this.props.fetchMovies(this.props.text)
        this.props.setLoading()
    }
    render () {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <h1 className ="display-4 mb-3">
                    <i className="fa fa-search"/> Search for movies
                </h1>
                <form id="searchFrom" onSubmit={this.onSubmit}>
                    <input 
                    type= "text"
                    className="form-control"
                    name="searchText"
                    placeholder="Search Movies"
                    onChange={this.onChange}
                    />
                </form>
            </div>
          );
    }
  
}

//go to  combine reducer movies:searchReducer then
//go to searchReducer then find text
const mapStateToProps = (state) => ({
    text:state.movies.text
})


export default connect(mapStateToProps, 
    {searchMovie, fetchMovies, setLoading} )
    (SearchForm);