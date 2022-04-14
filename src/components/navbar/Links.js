import React from 'react';
import { Link } from 'react-router-dom';

export const Links = () => {
    return (
        <nav className='link__navbar'>
            <div className='link__to'>
                <Link to='/'>
                    <p> Juan Jose Pina Agudo  </p>
                    <strong>Full Stack</strong>
                </Link>
            </div>
        </nav>
    )
}
