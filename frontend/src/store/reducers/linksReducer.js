import {CREATE_LINKS_SUCCESS} from "../actions/linksAction";

const initialState = {
    shortUrl: '',
    originalUrl: '',
}

const linksReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LINKS_SUCCESS:
            return {...state, shortUrl: 'http://localhost:8000/' + action.payload.shortUrl, originalUrl: action.payload.originalUrl}
        default:
            return state;
    }
    ;
};

export default linksReducer;