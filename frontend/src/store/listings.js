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

const initialUserListings = { userListings: []}
export const userListingsReducer = (state = initialUserListings, action) => {
    let newState;
    switch (action.type) {
        case SET_USER_LISTINGS:
            newState = Object.assign({});
            let userListings = action.payload.listings;
            userListings.forEach(listing => {
                newState[listing.id] = listing;
            })
            return newState;
        default:
            return state;
    }
}

//Setting up actions
const SET_LISTINGS = 'listings/setListings';
const CREATE_LISTING = 'listings/createListing';
const SET_USER_LISTINGS = 'listings/setListings/user'

const setListings = (listings) => {
    return {
        type: SET_LISTINGS,
        payload: listings,
    }
}

const setUserListings = (listing) => {
    return {
        type: SET_USER_LISTINGS,
        payload: listing,
    }
}

// Thunks
export const getListings = (userId) => async (dispatch) => {
    console.log("user id", userId)
    if(userId){
        const res = await fetch(`/api/listings/user/${userId}`);
        // console.log(res.data)
        dispatch(setUserListings(res.data));
        return res;
    }
    const res = await fetch('/api/listings');
    // console.log(res.data)
    dispatch(setListings(res.data));
    return res;
}

export const createListing = (listing) => async (dispatch) => {
    const { content, images, dailyPrice, city, stateLocation, zipcode } = listing;
    const formData = new FormData();
  
    formData.append("content", content);
    formData.append("dailyPrice", dailyPrice);
    formData.append("city", city);
    formData.append("state", stateLocation);
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
    console.log(res.data)
    // dispatch(setListing(res.data.listing));
}

export default listingsReducer;