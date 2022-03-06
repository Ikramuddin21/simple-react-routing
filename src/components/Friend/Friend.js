import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {

    const {id, name, phone, website, address} = props.friend;

    const navigate = useNavigate();

    const friendStyles = {
        border: '3px solid goldenrod',
        borderRadius: 10,
        margin: 10,
        padding: 25
    };

    const handleClick = () => {
        navigate(`/friend/${id}`)
    }

    return (
        <div style={friendStyles}>
            <h3>Name: {name}</h3>
            <h4>Website: {website}</h4>
            <p>Phone: {phone}</p>
            <p>Address: {address.city}</p>
            <Link to={`/friend/${id}`}>Visit me</Link>
            <Link to={`/friend/${id}`}>
                <button>Visit me</button>
            </Link>
            <button onClick={handleClick}>Visit me click</button>
        </div>
    );
};

export default Friend;