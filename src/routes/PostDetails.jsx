import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
    const { id } = useParams();
    return (
        <h2>Post Details {id}</h2>
    );
}
 
export default PostDetails;