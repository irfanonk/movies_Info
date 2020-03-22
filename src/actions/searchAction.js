 import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
 import OMDB from '../APIS/OMDB';
 import axios from 'axios';
 //import APIKey from '../APIS/APIKey';

 const APIKey = 'abbb376d'


 export const searchMovie = text => dispatch => {
    //console.log('search Action text:', text) 
    dispatch( {
        type:SEARCH_MOVIE,
        payload: text,
     }
     
     )
 }

//  export const fetchMovies = text => async dispatch => {
//     const response = await OMDB.get(`${text}`);
//    dispatch({
//         type:FETCH_MOVIES,
//         payload: response.data
//     })
//     //console.log('search payload:', response.data )
//     // .catch(err =>console.log('Fetching error', err))
//  } 
 export const fetchMovies = text => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then(response => dispatch({
        type:FETCH_MOVIES,
        payload: response.data
    }))
    .catch(err =>console.log('Fetching error:', err))
 } 

 export const fetchMovie = id => dispatch => {
   axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
   .then(response => dispatch({
       type:FETCH_MOVIE,
       payload: response.data
   }))
   //.then((payload) => console.log(payload))
   
   .catch(err =>console.log('Fetching error', err))
} 

export const setLoading = () => {
    return {
        type: LOADING,
    }
}