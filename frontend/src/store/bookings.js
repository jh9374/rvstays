import { fetch } from './csrf';

//Setting up Reducer
const initialState = { bookings: null };
const bookingsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case SET_BOOKINGS:
            newState.bookings = action.payload;
            return newState;
        default:
            return state;
    }
} 

//Setting up actions
const SET_BOOKINGS = 'bookings/setBookings';

const setBookings = (bookings) => {
    return {
        type: SET_BOOKINGS,
        payload: bookings,
    }
}

// Thunks
export const getBookings = () => async (dispatch) => {
    const res = await fetch('/api/bookings');
    console.log(res)
    // dispatch(setBookings(res.data))
    return res;
}