import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup" className="signup_link nav_links">
                    Sign Up
                </NavLink>
            </>
        );
    }

    return (
        <div id="nav_container">
            <ul className="nav_ul">
                <li className="nav_ul_links"> 
                    <NavLink exact to="/" className="home_link nav_links">
                    <div className="icon_image"></div>
                    <div className="icon_text">RVStays</div>
                            </NavLink>
                    {isLoaded && sessionLinks}
                </li>
            </ul>
        </div>
    );
}

export default Navigation;