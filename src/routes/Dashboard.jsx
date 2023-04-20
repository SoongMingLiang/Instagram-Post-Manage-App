import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/dashboard.css';
import LogoutButton from "../components/LogoutButton";
import Loading from "../components/Loading";

const Dashboard = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if(isLoading){
        return (
            <Loading />
        )
    }
    return (isAuthenticated &&
        (<div className="dashboard">
            <h2>Dashboard</h2>
            <LogoutButton />
        </div>)
    );
}
 
export default Dashboard;