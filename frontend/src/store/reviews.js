import { fetch } from './csrf';

//Setting up Reducer
const initialState = { reviews: null };
const reviewsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_REVIEWS:
            newState.reviews = action.payload;
            return newState;
        default:
            return state;
    }
}

//Setting up actions
const SET_REVIEWS = 'reviews/setReviews';

const setReviews = (reviews) => {
    return {
        type: SET_REVIEWS,
        payload: reviews,
    }
}

// Thunks
export const getReviews = () => async (dispatch) => {
    const res = await fetch('/api/reviews');
    console.log(res)
    // dispatch(setReviews(res.data))
    return res;
}