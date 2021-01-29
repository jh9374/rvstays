import { NavLink, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function ProfilePage() {
    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) return <Redirect to="/" />;
    return (
        <>
            {document.getElementById("root").classList.remove("hero-wrapper")}
            <div>
                <h2>Welcome to your profile</h2>
            </div>
            <div>
                <div>
                    <h2>Your Listings</h2>
                    <NavLink to="/create-listing">Add Listing</NavLink>
                </div>
            </div>
        </>
    )
}