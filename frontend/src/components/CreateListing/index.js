import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

export default function CreateListing() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [hostId, setHostId] = useState('');
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const [dailyPrice, setDailyPrice] = useState('');
    const [city, setCity] = useState('');
    const [stateLocation, setStateLocation] = useState('');
    const [zipcode, setZipcode] = useState('');
    if (!sessionUser) return <Redirect to="/" />;

    // console.log(sessionUser.id);


    async function handleSubmit(e) {
        e.preventDefault();

        if (sessionUser) {
            setHostId(sessionUser.id)
        }

        // dispatch(createListing({
        //     hostId,
        //     content,
        //     images,
        //     dailyPrice,
        //     city,
        //     state:stateLocation,
        //     zipcode
        // })).then( ()=> {
        //     setHostId('');
        //     setContent('');
        //     setImages([]);
        //     setDailyPrice('');
        //     setCity('');
        //     setStateLocation('');
        //     setZipcode('');
        // })

        
        //set dispatch to retrieve listings based on location
        // and on availability
        // { location, checkIn, checkOut }
        // let res = await dispatch(getListings(hostId));
        // console.log(res)
        // // if(!location && !checkIn && !checkOut){
        // return history.push("/listings")
        // }  
    }

    const updateFiles = (e) => {
      const files = e.target.files;
      setImages(files);
    };

    return (
        <div>
            <div className="createListing_wrapper">
                <div>
                    <h1>Create Listing</h1>
                </div>
                <div className="createListing_form_wrapper">
                    <form className="createListing_form">
                        <div className="input_wrapper">
                            <label
                                className="createListing_form_label"
                                htmlFor="createListing_content"
                            >Description
                            <input
                                    id="createListing_content"
                                    value={content}
                                    placeholder="Description of RV"
                                    className="createListing_form_input"
                                    onChange={e => setContent(e.target.value)}
                                >
                                </input>
                            </label>
                        </div>
                        <div className="input_wrapper">
                            <label
                                className="createListing_form_label"
                                htmlFor="createListing_Images"
                            >Description
                            <input
                                    id="createListing_Images"
                                    type="file"
                                    multiple
                                    className="createListing_form_input"
                                    onChange={updateFiles}
                                >
                                </input>
                            </label>
                        </div>
                        <div className="input_wrapper">
                            <label
                                className="createListing_form_label"
                                htmlFor="createListing_dailyPrice"
                            >Daily Price $
                            <input
                                    id="createListing_dailyPrice"
                                    value={dailyPrice}
                                    placeholder="50"
                                    className="createListing_form_input"
                                    onChange={e => setDailyPrice(e.target.value)}
                                >
                                </input>
                            </label>
                        </div>
                        <div className="input_wrapper">
                            <label
                                className="createListing_form_label"
                                htmlFor="createListing_city"
                            >City
                            <input
                                    id="createListing_city"
                                    value={city}
                                    placeholder="Orlando"
                                    className="createListing_form_input"
                                    onChange={e => setCity(e.target.value)}
                                >
                                </input>
                            </label>
                        </div>
                        <div className="input_wrapper">
                            <label
                                className="createListing_form_label"
                                htmlFor="createListing_stateLocation"
                            >State
                            <input
                                    id="createListing_stateLocation"
                                    value={stateLocation}
                                    placeholder="FL"
                                    className="createListing_form_input"
                                    onChange={e => setStateLocation(e.target.value)}
                                >
                                </input>
                            </label>
                        </div>
                        <div className="input_wrapper">
                            <label
                                className="createListing_form_label"
                                htmlFor="createListing_zipcode"
                            >Zipcode
                            <input
                                    id="createListing_zipcode"
                                    value={zipcode}
                                    placeholder="32883"
                                    className="createListing_form_input"
                                    onChange={e => setZipcode(e.target.value)}
                                >
                                </input>
                            </label>
                        </div>
                        <div className="createListing_submit">
                            <button type="submit">Create Listing</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}