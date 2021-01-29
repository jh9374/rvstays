import "./Listings.css"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import defaultImage from "../../images/rvstays_icon.001.png"

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
                                    <NavLink to={`/listings/${l.id}`} className="listing_image_anchor" >
                                        {l.imageUrls ?
                                            l.imageUrls.length > 0 ?
                                                (
                                                    l.imageUrls.map((image, i) => {
                                                        return(
                                                            <img src={image} alt={`${l}, ${i + 1}`} key={image} />
                                                              )
                                                    })
                                                )
                                                
                                                : (<img src={defaultImage} alt={`default`} />)

                                                : (<img src={defaultImage} alt={`default`} />)
                                        }
                                    </NavLink>
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
