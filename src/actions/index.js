// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from 'axios';
import { red } from 'ansi-colors';

export const FETCH_SWAPI = 'FETCH_SWAPI';
export const REQSUCCESS = 'REQSUCCESS';
export const REQFAILURE = 'REQFAILURE';

export const fetchSwapi = () => dispatch => {
    dispatch({ type: FETCH_SWAPI });
    axios.get('https://swapi.co/api/people/')
    .then(res => {
        console.log(res)
        dispatch({
            type: REQSUCCESS,
            payload: res.data.results
        })
    })
    .catch(err => {
        dispatch({
            type: REQFAILURE,
            payload: err
        })
    })
};
