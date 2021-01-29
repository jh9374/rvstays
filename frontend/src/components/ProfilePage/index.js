import { NavLink } from "react-router-dom";

export default function ProfilePage() {
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