import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import styled from 'styled-components';
import '../styles/dashboard.css';
import LogoutButton from "../components/LogoutButton";
import Loading from "../components/Loading";

const Dashboard = () => {
    const API_SERVER = import.meta.env.VITE_API_SERVER;
    const {user, isAuthenticated, isLoading} = useAuth0();
    const [posts, setPosts] = useState([]);
    const [Loading, setLoading] = useState(true);

    const getData = () => {
        axios.get(API_SERVER+'/post/')
            .then(response => {
                const data = response.data;
                if(data){
                    setPosts(data);
                }
                setLoading(false)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData();
    }, [isAuthenticated])

    const StyledLink = styled(Link)`
        text-decoration: none;
        color: black;

        &:visited {
            color: black;
        }
    `;

    if(isLoading || Loading){
        return (
            <Loading />
        )
    }

    return (isAuthenticated && (posts.length >= 0) &&
        (<div className="dashboard">
            <div id="bar">
                <div id="header">
                    <h2>Dashboard</h2>
                    <LogoutButton />
                </div>
            </div>

            <div id="postList">
                {posts.map((post) => {
                    return(
                        <div id="postPreview" key={post._id}>
                            <StyledLink to={`/dashboard/post/${post._id}`} >
                                <p>{post.id}</p>
                            </StyledLink>
                        </div>
                    )
                })}
            </div>
        </div>)
    );
}
 
export default Dashboard;