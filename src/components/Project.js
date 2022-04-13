import React from 'react'
import { Links } from './navbar/Links'
import { Navbar } from './navbar/Navbar'

export const Project = () => {
    return (
        <div className=''>
            <Links />
            <div className='about__content'>
                <Navbar />
                <div className='project__content'>


                    <div className='project__android project__border'>

                        <img src="\assets\img\bread.png" width="100" />
                    </div>
                    <div className='project__web project__border'>
                        <img src='\assets\img\car.jpg' width="250" />

                    </div>


                </div>
            </div>
        </div>
    )
}
