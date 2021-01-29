import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { createListing } from "../../store/listings"

export default function CreateListingForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const [dailyPrice, setDailyPrice] = useState('');
    const [city, setCity] = useState('');
    const [stateLocation, setStateLocation] = useState('');
    const [zipcode, setZipcode] = useState('');

    if (!sessionUser) return <Redirect to="/" />;

    async function handleSubmit(e) {
        e.preventDefault();

        dispatch(createListing({
            content,
            images,
            dailyPrice,
            city,
            stateLocation,
            zipcode
        })).then( ()=> {
            setContent('');
            setImages([]);
            setDailyPrice('');
            setCity('');
            setStateLocation('');
            setZipcode('');
        })
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
                    <form className="createListing_form" onSubmit={handleSubmit}>
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
                                    type="number"
                                    value={dailyPrice}
                                    placeholder="50"
                                    className="createListing_form_input"
                                    onChange={e => setDailyPrice(+e.target.value)}
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
                                    type="number"
                                    value={zipcode}
                                    placeholder="32883"
                                    className="createListing_form_input"
                                    onChange={e => setZipcode(+e.target.value)}
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