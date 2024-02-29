import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./App.css";

function Login() {
    const [username, setUserName] = useState("");
    const [_password_hash, setPasswordHash] = useState("");
    const [usertype, setUserType] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newUser = {
            username,
            _password_hash,
            usertype,
            email,
            phone,
            address,
        };

        const response = await fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        const result = await response.json();

        if (result.success) {
            if (usertype === 'admin') {
                history.push('/animals');
            } else {
                history.push('/animalfeed');
            }
        } else {
            console.error('Login Failed');
        }
    };

    return (
        <div className="navbar-wrapper">
            <NavLink to="/animals">
                <img src={logo} className="App-logo" alt="Fostr" />
            </NavLink>
            <h2>Please Login</h2>
            <form onSubmit={handleSubmit}>
                <label className=".form-container label" htmlFor="username">
                    <input
                        className="form-container input"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </label>
                <label className=".form-container label" htmlFor="_password_hash">
                    <input
                        className="form-container input"
                        type="text"
                        id="_password_hash"
                        value={_password_hash}
                        onChange={(e) => setPasswordHash(e.target.value)}
                    />
                </label>
                <label className=".form-container label" htmlFor="usertype">
                    <input
                        className="form-container input"
                        type="text"
                        id="usertype"
                        value={usertype}
                        onChange={(e) => setUserType(e.target.value)}
                    />
                </label>
                <label className=".form-container label" htmlFor="email">
                    <input
                        className="form-container input"
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label className=".form-container label" htmlFor="phone">
                    <input
                        className="form-container input"
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                <label className=".form-container label" htmlFor="address">
                    <input
                        className="form-container input"
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
