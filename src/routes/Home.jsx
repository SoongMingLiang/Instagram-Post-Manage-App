import React from "react";
import LoginButton from "../components/LoginButton";
import '../styles/home.css';
import image from '../assets/github-icon.png';
import authentication from '../assets/authentication.gif';
import dashboard from '../assets/dashboard.gif';
import delete_post from '../assets/delete-post.gif';

const Home = () => {

    return (
        <div className="home">
            <div id="header">
                <h2 id="title">Instagram Post Management system</h2>
                <div id="loginbutton"><LoginButton /></div>
            </div>
            <div id="body">
                <p>This web application is to manage the post that have been made by anonymous user. It provides a list of posts that are available in the database and the Instagram page, and a function to delete a certain post.</p>
                <div id="showcase">
                    <div className="each-showcase">
                        <img src={authentication} alt="Authentication" style={{height: '200px', width: '400px'}} />
                        <p>User Authentication</p>
                    </div>
                    <div className="each-showcase">
                        <img src={dashboard} alt="Dashboard" id="dashboard" style={{height: '200px', width: '400px'}} />
                        <p>List all posts</p>
                    </div>
                    <div className="each-showcase">
                        <img src={delete_post} alt="Delete post" id="delete" style={{height: '200px', width: '400px'}} />
                        <p>Delete a post</p>
                    </div>
                </div>
                <p>Link to Instagram Auto Post project (Details down at the README section): <a href="https://github.com/SoongMingLiang/Instagram-Auto-Post">Github</a></p>
            </div>
            <div id="footer">
                <p id="text">Code by Soong Ming Liang &copy;</p>
                <a href="https://github.com/SoongMingLiang"><img src={image} alt="GitHub" id="githubIcon"/></a>
            </div>
        </div>
    );
}
 
export default Home;