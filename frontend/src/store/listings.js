import { fetch } from './csrf';

//Setting up Reducer
const initialState = { listings: false};
const listingsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_LISTINGS:
            newState = Object.assign({});
            let listings = action.payload.listings;
            listings.forEach( listing =>{
                newState[listing.id] = listing;
            }) 
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
export const getListings = (userId) => async (dispatch) => {
    const res = await fetch('/api/listings');
    console.log(res.data)
    dispatch(setListings(res.data));
    return res;
}

export default listingsReducer;