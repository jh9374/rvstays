import { useHistory, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import "./ListingPage.css"
import defaultImage from "../../images/rvstays_icon.001.png"
import { useState } from "react"

export default function ListingPage() {
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const { id } = useParams();
    const listing = useSelector(state => {
        return state.listings[id];
    })

    console.log("listing page object", listing)
    return (
        <div className="listing_page_wrapper">
            <div className="listing_page_contents">
                <h1 className="listing_page_heading">{listing.content}</h1>
                <div className="listing_page_image">
                    {listing.imageUrls ?
                        listing.imageUrls.length > 0 ?
                            (
                                listing.imageUrls.map((image, i) => {
                                    return (
                                        <img src={image} alt={`${listing}, ${i + 1}`} key={image} />
                                    )
                                })
                            )

                            : (<img src={defaultImage} alt={`default`} />)

                        : (<img src={defaultImage} alt={`default`} />)
                    }
                </div>
                <div className="listing_page_details">
                    <div className="listing_details">

                        <h2>Hosted by: </h2>
                        <h2>Daily Price:{` $${listing.dailyPrice}`}</h2>
                        <h2>{`Located in Beautiful ${listing.city} ${listing.state}, ${listing.zipcode}`}</h2>
                        <button
                            onClick={() => sessionUser ? setShowBookingForm(!showBookingForm) : history.push("/login")}>
                            Want to Book?
                    </button>
                    </div>
                    {showBookingForm &&
                        (
                            <div className="booking_form_wrapper">
                                <h2>Booking Form</h2>
                                <form className="booking_form">
                                    <div className="input_wrapper">
                                        <label
                                            className="booking_form_label"
                                            htmlFor="booking_checkInDates"
                                        >
                                            Check In:
                                <input
                                                id="booking_checkInDates"
                                                type="date">
                                            </input>
                                        </label>
                                    </div>
                                    <div className="input_wrapper">
                                        <label
                                            className="booking_form_label"
                                            htmlFor="booking_checkOutDates"
                                        >
                                            Check Out:
                                <input
                                                id="booking_checkOutDates"
                                                type="date">
                                            </input>
                                        </label>
                                    </div>
                                    <div>
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        )

                    }
                </div>

            </div>
        </div>
    )
}