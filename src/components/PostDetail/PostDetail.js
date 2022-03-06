import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PostDetail = () => {

    const {id} = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, []);

    return (
        <div>
            <h2>{post.id}</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to="/posts">See all post</Link>
        </div>
    );
};

export default PostDetail;