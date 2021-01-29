import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import "./ListingPage.css"
import defaultImage from "../../images/rvstays_icon.001.png"
import { useState } from "react"

export default function ListingPage() {

    const sessionUser = useSelector(state => state.session.user);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const { id } = useParams();
    const listing = useSelector(state => {
        return state.listings[id];
    })

    console.log("listing page object", listing)
    return (
        <div>
            <h1>{listing.content}</h1>
            <div className="listing_image_anchor">
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

            <h2>Hosted by: </h2>
            <h2>Daily Price:{` $${listing.dailyPrice}`}</h2>
            <h2>{`Located in Beautiful ${listing.city} ${listing.state}, ${listing.zipcode}`}</h2>
            <button
                onClick={ () => sessionUser ? setShowBookingForm(!showBookingForm): null}>
                Want to Book?
            </button>
            { showBookingForm &&
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
                            <button type="submit">Send Request</button>
                        </div>
                    </form>
                </div>
            )
                   
            }
        </div>
    )
}