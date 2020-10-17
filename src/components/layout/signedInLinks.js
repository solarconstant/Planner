import React from 'react';
import { NavLink } from 'react-router-dom'; 
const signedInLinks = () =>
{
    return (
        <ul className = "right">
            <li>
                <NavLink to = '/create'>
                    New Project
                </NavLink>
            </li>
            <li>
                <NavLink to = '/'>
                    Log Out
                </NavLink>
            </li>
            <li>
                <NavLink to = '/' className = "btn btn-floating blue lighten-1">
                    SA
                </NavLink>
            </li>
        </ul>
    )
}

export default signedInLinks;