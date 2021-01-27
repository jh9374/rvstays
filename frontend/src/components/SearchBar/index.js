import "./SearchBar.css"

export default function SearchBar() {
    return (
        <div className="search_form_wrapper">

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
                            className="search_form_input">
                        </input>
                    </div>
                    <div className="submit_wrapper">
                        <button
                            className="search_button">
                            {/* Search */}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}