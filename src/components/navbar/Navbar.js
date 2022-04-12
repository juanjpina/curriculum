import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className='nav__links'>
            <div >
                <Link
                    className='nav__circle-cu'
                    to='/curriculum'>
                    <p className='nav__circle-div-cu'>Curriculum</p>
                </Link>
            </div>
            <div >
                <Link
                    className='nav__circle-pr'
                    to='/project'>
                    <p className='nav__circle-div-pr'>Projects</p>
                </Link>
            </div>
            <div >
                <Link
                    className='nav__circle-co'
                    to='/contact'>
                    <p className='nav__circle-div-co'>Contact</p>
                </Link>
            </div>
        </nav>
    )
}
