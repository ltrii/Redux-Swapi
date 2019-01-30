// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from 'axios';

export const FETCH_SWAPI = 'FETCH_SWAPI';
export const REQSUCCESS = 'REQSUCCESS';
export const REQFAILURE = 'REQFAILURE';

export const fetchSwapi = () => dispatch => {
    const request = axios.get('https://swapi.co/api/people/');
        request.then(({data}) => {
            dispatch({ type: FETCH_SWAPI })
        })
        .catch(err => {
            console.log(err)
        })
};