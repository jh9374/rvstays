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
        case CREATE_LISTING:
            return;
        default:
            return state;
    }
}

//Setting up actions
const SET_LISTINGS = 'listings/setListings';
const CREATE_LISTING = 'listings/createListing';

const setListings = (listings) => {
    return {
        type: SET_LISTINGS,
        payload: listings,
    }
}

const setListing = (listing) => {
    return {
        type: CREATE_LISTING,
        payload: listing,
    }
}

// Thunks
export const getListings = (userId) => async (dispatch) => {
    const res = await fetch('/api/listings');
    console.log(res.data)
    dispatch(setListings(res.data));
    return res;
}

export const createListing = (listing) => async (dispatch) => {
    const { hostId, content, images, dailyPrice, city, state, zipcode } = listing;
    const formData = new FormData();
    formData.append("hostId", hostId);
    formData.append("content", content);
    formData.append("dailyPrice", dailyPrice);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("zipcode", zipcode);

    // for multiple files
    if (images && images.length !== 0) {
        for (var i = 0; i < images.length; i++) {
            formData.append("images", images[i]);
        }
    }

    const res = await fetch(`/api/listings/`, {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    });

    dispatch(setListing(res.data.listing));
}

export default listingsReducer;