import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getListings, deleteListing, updateListing} from '../../store/listings';
import { useEffect, useState } from "react"
import defaultImage from "../../images/rvstays_icon.001.png"

export default function ProfilePage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [deleteListingId, setDeleteListingId] = useState('');
    const [updateListingId, setUpdateListingId] = useState('');
    const [showUpdateForm, setShowUpdateForm] = useState(false);

    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const [dailyPrice, setDailyPrice] = useState('');
    const [city, setCity] = useState('');
    const [stateLocation, setStateLocation] = useState('');
    const [zipcode, setZipcode] = useState('');

    useEffect(() => {
        dispatch(getListings(sessionUser.id)).then((res) => console.log("listings search", res));
    }, [sessionUser.id]);

    let userListings = useSelector(state => {
        return Object.values(state.userListings);
    });

    useEffect(() => {
        dispatch(deleteListing(deleteListingId)).then((res) => console.log("deleted listing", res));
        history.push("/profile")
    }, [deleteListingId]);

    useEffect(() => {
        console.log("Updating listing", updateListingId)
        // dispatch(deleteListing(updateListingId)).then((res) => console.log("updated listing", res));
    }, [updateListingId]);

    async function submitUpdate(){
        console.log(updateListingId)
        // dispatch(updateListing( updateListingId, {
        //     content,
        //     images,
        //     dailyPrice,
        //     city,
        //     stateLocation,
        //     zipcode
        // })).then(() => {
        //     setContent('');
        //     setImages([]);
        //     setDailyPrice('');
        //     setCity('');
        //     setStateLocation('');
        //     setZipcode('');
        // })
    }

    const updateFiles = (e) => {
        const files = e.target.files;
        setImages(files);
    }

    return (
        <>
            {document.getElementById("root").classList.remove("hero-wrapper")}
            { console.log("User Listings search", userListings)}
            <div>
                <h2 className="dashboard_heading">Welcome to your Dashboard</h2>
            </div>
            <div>
                <div>
                    <h2 className="listings_heading">Your Listings</h2>
                    {userListings.length > 0 ? (
                        userListings.map(l => {
                            return (
                                <div className="listings_wrapper" key={l.id}>
                                    <div className="listing_data_wrapper">
                                        <div className="listing_items image_div">
                                            {showUpdateForm ? (

                                                <div className="update_listing_input_wrapper">
                                                    <label
                                                        className="updateListing_form_label"
                                                        htmlFor="updateListing_Images"
                                                    >Images
                                                        <input
                                                            id="updateListing_Images"
                                                            type="file"
                                                            multiple
                                                            className="updateListing_form_input"
                                                            onChange={updateFiles}
                                                        >
                                                        </input>
                                                    </label>
                                                </div>
                                            )
                                                :
                                                <div className="listing_image_anchor" >
                                                    {l.imageUrls ?
                                                        l.imageUrls.length > 0 ?
                                                            (
                                                                <img src={l.imageUrls[0]} alt={`${l}, ${1}`} key={l.imageUrls[0]} />
                                                                // l.imageUrls.map((image, i) => {
                                                                //     if (i < 1)
                                                                //         return (
                                                                //             <img src={image} alt={`${l}, ${i + 1}`} key={image} />
                                                                //         )
                                                                //     return
                                                                // })
                                                            )

                                                            : (<img src={defaultImage} alt={`default`} key={defaultImage} />)

                                                        : (<img src={defaultImage} alt={`default`} key={`${defaultImage}`} />)
                                                    }
                                                </div>
                                            }
                                        </div>
                                        <div className="listing_items content_div">
                                            {showUpdateForm ?
                                                (
                                                    <div className="update_listing_input_wrapper">
                                                        <label
                                                            className="updateListing_form_label"
                                                            htmlFor="updateListing_content"
                                                        >Description
                                                        <input
                                                                id="updateListing_content"
                                                                value={content}
                                                                placeholder="Description of RV"
                                                                className="updateListing_form_input"
                                                                onChange={e => setContent(e.target.value)}
                                                            >
                                                            </input>
                                                        </label>
                                                        <div className="updateListing_details">
                                                            <label
                                                                className="updateListing_form_label"
                                                                htmlFor="updateListing_city"
                                                            >City
                                                                <input
                                                                    id="updateListing_city"
                                                                    value={city}
                                                                    placeholder="Orlando"
                                                                    className="updateListing_form_input"
                                                                    onChange={e => setCity(e.target.value)}
                                                                >
                                                                </input>
                                                            </label>
                                                            <label
                                                                className="updateListing_form_label"
                                                                htmlFor="updateListing_stateLocation"
                                                            >State
                                                                <input
                                                                    id="updateListing_stateLocation"
                                                                    value={stateLocation}
                                                                    placeholder="FL"
                                                                    className="updateListing_form_input"
                                                                    onChange={e => setStateLocation(e.target.value)}
                                                                >
                                                                </input>
                                                            </label>
                                                            <label
                                                                className="updateListing_form_label"
                                                                htmlFor="updateListing_zipcode"
                                                            >Zipcode
                                                                <input
                                                                    id="updateListing_zipcode"
                                                                    type="number"
                                                                    value={zipcode}
                                                                    placeholder="32883"
                                                                    className="updateListing_form_input"
                                                                    onChange={e => setZipcode(+e.target.value)}
                                                                >
                                                                </input>
                                                            </label>
                                                        </div>
                                                    </div>
                                                )
                                                :
                                                (
                                                    <>
                                                <p className="listing_content">{`${l.content}.`}</p>
                                                <p className="listing_content">{`Located in ${l.city}, ${l.state} ${l.zipcode}`}</p> 
                                                </>
                                                )
                                            }
                                        </div>
                                        <div className="listing_items price_div">
                                            { showUpdateForm ? (
                                                <label
                                                    className="updateListing_form_label"
                                                    htmlFor="updateListing_dailyPrice"
                                                >Daily Price $
                                                    <input
                                                        id="updateListing_dailyPrice"
                                                        type="number"
                                                        value={dailyPrice}
                                                        placeholder="50"
                                                        className="updateListing_form_input"
                                                        onChange={e => setDailyPrice(+e.target.value)}
                                                    >
                                                    </input>
                                                </label>
                                            ):
                                                <span className = "listing_price">{`$${l.dailyPrice} / night`}</span>
                                            }
                                            
                                        </div>
                                        <div className="listings_buttons_wrapper">
                                            { showUpdateForm &&
                                            (
                                                <span
                                                    className="listings_buttons listings_update"
                                                    onClick={submitUpdate}>
                                                    Submit

                                                </span>
                                            )}
                                            <span
                                                className="listings_buttons listings_update"
                                                onClick={(e) => {
                                                    setUpdateListingId(e.target.id);
                                                    setShowUpdateForm(!showUpdateForm);
                                                    }}>
                                                    { showUpdateForm ? 'Cancel' : 'Update'}
                                                
                                                </span>
                                            <span
                                                className="listings_buttons listings_delete"
                                                id={l.id}
                                                onClick={(e) => setDeleteListingId(e.target.id)}>
                                                Delete
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    )
                        : <div>
                            <h2 className="listings_heading">You currently don't have any listings</h2>
                        </div>
                    }
                    <div>
                        <div className="create_listing_button_wrapper">
                            <NavLink className="create_listing_link" to="/create-listing">Add Listing</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}