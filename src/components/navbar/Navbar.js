import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className='nav__links'>
            <div >
                <NavLink
                    className='nav__circle-cu'
                    to='/curriculum'>
                    <p className='nav__circle-div-cu'>Curriculum</p>
                </NavLink>
            </div>
            <div >
                <NavLink
                    className='nav__circle-pr'
                    to='/project'>
                    <p className='nav__circle-div-pr'>Projects</p>
                </NavLink>
            </div>
            <div >
                <NavLink
                    className='nav__circle-co'
                    to='/contact'>
                    <p className='nav__circle-div-co'>Contact</p>
                </NavLink>
            </div>
        </nav>
    )
}
