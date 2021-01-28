import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { NavLink } from "react-router-dom"
import LoginForm from './LoginForm';
import "./LoginForm.css"

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <NavLink to="/" className="login_link nav_links" onClick={() => setShowModal(true)}>Login</NavLink>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                    <div className="login_form_signup" onClick={() => setShowModal(false)}>
                        <NavLink to="/signup">Need to sign up?</NavLink>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;