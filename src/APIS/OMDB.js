import axios from 'axios';
import {APIKey} from './APIKey'


export default axios.create ({
    baseURL:`http://www.omdbapi.com/?apikey=${APIKey}&s=`
});