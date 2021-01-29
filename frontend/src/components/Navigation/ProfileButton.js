import React from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink } from "react-router-dom";

function ProfileButton({ user }) {
    const dispatch = useDispatch();

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <span className="logout_button" onClick={logout}>Log Out</span>
            <NavLink className="profile_button" to="/profile">
                Profile
            </NavLink>
            <span className="welcome_text">Welcome {user.username}</span>
        </>
    );
}

export default ProfileButton;