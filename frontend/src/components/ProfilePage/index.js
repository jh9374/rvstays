import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getListings } from '../../store/listings';
import { useEffect } from "react"
import defaultImage from "../../images/rvstays_icon.001.png"

export default function ProfilePage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    // const [listings, setListings] = useState([])

    useEffect(() => {
        dispatch(getListings(sessionUser.id)).then((res) => console.log("listings search", res));
    }, [dispatch, sessionUser.id]);

    let userListings = useSelector(state => {
        return Object.values(state.userListings);
    });

    return (
        <>
            {document.getElementById("root").classList.remove("hero-wrapper")}
            { console.log("User Listings search", userListings)}
            <div>
                <h2>Welcome to your profile</h2>
            </div>
            <div>
                <div>
                    <h2>Your Listings</h2>
                    {userListings.length > 0 ? (
                        userListings.map(l => {
                            return (
                                <div className="listings_wrapper" key={l.id}>
                                    <div className="listing_data_wrapper">
                                        <div className="listing_items">
                                            <div className="listing_image_anchor" >
                                                {l.imageUrls ?
                                                    l.imageUrls.length > 0 ?
                                                        (
                                                            l.imageUrls.map((image, i) => {
                                                                return (
                                                                    <img src={image} alt={`${l}, ${i + 1}`} key={image} />
                                                                )
                                                            })
                                                        )

                                                        : (<img src={defaultImage} alt={`default`} />)

                                                    : (<img src={defaultImage} alt={`default`} />)
                                                }
                                            </div>
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
                        })
                    )
                    : <div>
                        <h2>You don't have any listings</h2>
                    </div>
                }
                    <NavLink to="/create-listing">Add Listing</NavLink>
                </div>
            </div>
        </>
    )
}