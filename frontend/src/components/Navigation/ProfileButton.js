import React from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink, useHistory } from "react-router-dom";
import "../ProfilePage/ProfilePage.css"


function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };

    return (
        <>
            <span className="logout_button" onClick={logout}>Log Out</span>
            <NavLink className="profile_button" to="/profile">
                Dashboard
            </NavLink>
            <span className="welcome_text">Welcome {user.username}</span>
        </>
    );
}

export default ProfileButton;