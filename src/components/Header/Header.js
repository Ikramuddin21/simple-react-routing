import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink
                 to="/home"
                 style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}
                >Home</NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })} to="/friends">Friends</NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })} to="/about">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;