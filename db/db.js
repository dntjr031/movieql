import fetch from 'node-fetch';

const API_URL = 'https://yts.am/api/v2/list_movies.json'

export const getMovies = (limit, rating) => {
    let requestUrl = API_URL;
    if (limit > 0) {
        requestUrl += `?limit=${limit}`;
    }
    if (rating > 0) {
        const suffix = limit > 0 ? '&' : '?';
        requestUrl += `${suffix}minimum_rating=${rating}`;
    }
    return fetch(requestUrl).then(response => response.json()).then(json => json.data.movies);
}

