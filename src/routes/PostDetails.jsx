import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import '../styles/postDetails.css';

const PostDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const API_SERVER = import.meta.env.VITE_API_SERVER;
    const [post, setPost] = useState();

    const getData = () => {
        axios.get(API_SERVER+`/post/${id}`)
            .then(response => {
                const data = response.data;
                if(data){
                    setPost(data);
                }
            })
            .catch((err) => console.log(err))
    }

    const handleBackButton = () => {
        navigate('/dashboard');
    }

    const deletePost = (postID) => {
        if(post){
            const id = postID.substring(1);
            const path = API_SERVER+`/post/${id}`;
            axios.delete(path)
                .then(() => {
                    console.log('post deleted');
                    navigate('/dashboard')
                })
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (post && (
        <div id="postDetails">
            <h2>Post Details</h2>
            <button id="backButton" onClick={handleBackButton}>Back to Dashboard</button>
            <div id="details">
                <p><span>Post id: </span><span className="content">{post.id}</span></p>
                <p><span>Content: </span><span className="content">{post.content}</span></p>
                <p><span>Time created: </span><span className="content">{post.createdAt}</span></p>
                <p><span>Time updated: </span><span className="content">{post.updatedAt}</span></p>
            </div>
            <button id="deleteButton" onClick={() => deletePost(post.id)}>Delete</button>
        </div>
    ));
}
 
export default PostDetails;