import "./Listings.css"

export default function Listings() {
    return (
        <>
            { document.getElementById("root").classList.remove("hero-wrapper")}
            <div>
                <h2 className="listings_heading">Welcome to Listings</h2>
            </div>
        </>
    )
}