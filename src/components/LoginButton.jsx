import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import '../styles/login.css'

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button id="login" onClick={() => loginWithRedirect()}>
            Login
        </button>
    );
}
 
export default LoginButton;