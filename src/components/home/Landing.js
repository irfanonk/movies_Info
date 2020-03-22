import React, { Component } from 'react';
import {connect} from 'react-redux';

import SearcForm from './SearchFrom';
import Spinner from '../layout/Spinner';
import MoviesContainer from './MoviesContainer';




 class Landing extends Component {
    render() {
        //check if loading true or false
        const {loading} = this.props
        return (
            <div className="container">
                <SearcForm />
                {loading ? <Spinner /> : <MoviesContainer />}
            </div>
        )
    }
}

const mapStatetoProps = state => ({
    loading :state.movies.loading
})
export default connect(mapStatetoProps, )(Landing)