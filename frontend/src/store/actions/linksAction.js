import axios from "axios";

export const FETCH_LINKS_REQUEST = 'FETCH_LINKS_REQUEST';
export const FETCH_LINKS_SUCCESS = 'FETCH_LINKS_SUCCESS';
export const FETCH_LINKS_FAILURE = 'FETCH_LINKS_FAILURE';

export const CREATE_LINKS_REQUEST = 'CREATE_LINKS_REQUEST';
export const CREATE_LINKS_SUCCESS = 'CREATE_LINKS_SUCCESS';
export const CREATE_LINKS_FAILURE = 'CREATE_LINKS_FAILURE';


export const fetchLinksRequest = () => ({type: FETCH_LINKS_REQUEST});
export const fetchLinksSuccess = data => ({type: FETCH_LINKS_SUCCESS, payload: data});
export const fetchLinksFailure = () => ({type: FETCH_LINKS_FAILURE});

export const createLinksRequest = () => ({type: CREATE_LINKS_REQUEST});
export const createLinksSuccess = data => ({type: CREATE_LINKS_SUCCESS, payload: data});
export const createLinksFailure = () => ({type: CREATE_LINKS_FAILURE});


export const fetchProducts = () => {
    return async dispatch => {
        try {
            dispatch(fetchLinksRequest());
            const response = await axios.get('http://localhost:8000/links');
            dispatch(fetchLinksSuccess(response.data));
        } catch (e) {
            dispatch(fetchLinksFailure());
        }
    };
};

export const createShortUrl = data => {
    return async dispatch => {
        try {
            dispatch(createLinksRequest());

            const response = await axios.post('http://localhost:8000/links', {url: data});
            console.log(response.data);
            dispatch(createLinksSuccess(response.data));
        } catch (e) {
            dispatch(createLinksFailure());
            throw e;
        }
    };
};
