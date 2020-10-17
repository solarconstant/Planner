import React from 'react';
import { NavLink } from 'react-router-dom';
const signedOutLinks = () =>
{
    return (
        <ul className = "right">
            <li>
                <NavLink to = '/signup'>
                    Sign Up
                </NavLink>
            </li>
            <li>
                <NavLink to = '/signin'>
                    Log In
                </NavLink>
            </li>
        </ul>
    )
}

export default signedOutLinks;