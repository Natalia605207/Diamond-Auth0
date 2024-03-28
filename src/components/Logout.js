import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Secret from "./Secret";

const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();
    return(
    isAuthenticated && (
    <div>
        <div className="logout-button">
    <button onClick={() => logout()} className="logout-btn">LOG OUT</button>
    </div>
    <Secret />
    </div>
    ))
}

export default Logout;