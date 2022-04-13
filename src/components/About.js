import React from 'react'
import { Links } from './navbar/Links'
import { Navbar } from './navbar/Navbar'


export const About = () => {
    return (
        <div className=''>
            <Links />
            <div className='about__content'>
                <Navbar />
                <p className='about__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</p>
            </div>
        </div>
    )
}
