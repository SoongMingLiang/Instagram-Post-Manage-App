import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/logout.css'

const LogoutButton = () => {
    const { logout } = useAuth0();
    return (
        <button id="logout" onClick={() => logout()}>
            LogOut
        </button>
    );
}
 
export default LogoutButton;