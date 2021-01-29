import "./Listings.css"
import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

export default function Listings() {
    let listings = useSelector(state => {
        return Object.values(state.listings);
    })
    return (
        <>
            { document.getElementById("root").classList.remove("hero-wrapper")}

            { listings[0] ? (
                <div>
                    <h2 className="listings_heading">Welcome to Listings</h2>
                </div>,
                listings.map(l => {
                    return (
                        <div className="listings_wrapper" key={l.id}>
                            <div className="listing_data_wrapper">
                                <div className="listing_items">
                                    <a href="/listings/id" className="listing_image_anchor">
                                        <div className="listing_image"></div>
                                    </a>
                                </div>
                                <div className="listing_items">
                                    <span className="listing_content">{l.content}</span>
                                </div>
                                <div className="listing_items">
                                    <span className="listing_price">${l.dailyPrice}</span>
                                </div>
                            </div>
                        </div>
                    )
                }))
                : <div>
                    <h2 className="listings_heading">No Listings Found</h2>
                </div>
            }
        </>
    )
}
