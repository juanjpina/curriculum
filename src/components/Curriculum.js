import React from 'react';
import { Links } from './navbar/Links';
import { Navbar } from './navbar/Navbar';
import { Menu } from '../components/menu/Menu';


export const Curriculum = () => {

    return (
        <div>
            <Links />
            <div className='about__content'>
                <Navbar />
                <div>
                    <Menu />
                </div>
            </div>

        </div>
    )
}
