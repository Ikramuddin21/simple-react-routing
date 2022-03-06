import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [id]);

    const handleClick = () => {
        navigate("/friends");
    }

    return (
        <div>
            <h2>Name: {friend.name}</h2>
            <h3>Website: {friend.website}</h3>
            <h5>Phone: {friend.phone}</h5>
            <p>Company: {friend.company?.name}</p>
            <button onClick={handleClick}>See all friends</button>
        </div>
    );
};

export default FriendDetail;