import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/post/${post.id}`)
    }

    return (
        <div>
            <h2>{post.title}</h2>
            <Link to={`/post/${post.id}`}>See detail</Link>
            <button onClick={handleClick}>Click me detail</button>
        </div>
    );
};

export default Post;