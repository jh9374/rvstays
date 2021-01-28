import "./SearchBar.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { getListings } from '../../store/listings';


export default function SearchBar() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [ location, setLocation ] = useState('');
    const [ checkIn, setCheckIn ] = useState('');
    const [ checkOut, setCheckOut ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //set dispatch to retrieve listings based on location
        // and on availability
        let res = dispatch(getListings())
        console.log(res)
        // if(!location && !checkIn && !checkOut){
            
        //     // return history.push("/listings")
        // }
        
    }
    return (
        <div className="search_form_wrapper" onSubmit={handleSubmit}>
            {document.getElementById("root").classList.add("hero-wrapper")}
            <div className="banner_text_wrapper">
                <h2 className="banner_text">
                    Where do you want to go?
                </h2>
            </div>
            <div className="search_wrapper">
                <form className="search_form">
                    <div className="input_wrapper location_wrapper">
                        <label
                            className="search_form_label"
                            htmlFor="location_input">
                            Location
                        </label>
                        <input
                            id="location_input"
                            value={location}
                            onChange={ (e) => setLocation(e.target.value)}
                            className="search_form_input">
                        </input>
                    </div>
                    <div className="input_wrapper checkin_wrapper">
                        <label
                            className="search_form_label"
                            htmlFor="checkin_input">
                            Check in
                        </label>
                        <input
                            id="checkin_input"
                            value={checkIn}
                            onChange={ (e) => setCheckIn(e.target.value)}
                            className="search_form_input">
                        </input>
                    </div>
                    <div className="input_wrapper checkout_wrapper">
                        <label
                            className="search_form_label"
                            htmlFor="checkout_input">
                            Check out
                        </label>
                        <input
                            id="checkout_input"
                            value={checkOut}
                            onChange={ (e) => setCheckOut(e.target.value)}
                            className="search_form_input">
                        </input>
                    </div>
                    <div className="submit_wrapper">
                        <button
                            className="search_button">
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}