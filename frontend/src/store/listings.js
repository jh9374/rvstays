import { fetch } from './csrf';

//Setting up Reducer
const initialState = { listings: null};
const listingsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_LISTINGS:
            // newState = Object.assign({}, state);
            newState.listings = action.payload;
            return newState;
        default:
            return state;
    }
}

//Setting up actions
const SET_LISTINGS = 'listings/setListings';

const setListings = (listings) => {
    return {
        type: SET_LISTINGS,
        payload: listings,
    }
}


// Thunks

export const getListings = () => async (dispatch) => {
    const res = await fetch('/api/listings');
    console.log(res)
    dispatch(setListings(res.data));
    return res;
}

export default listingsReducer;