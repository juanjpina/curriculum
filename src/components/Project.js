import React from 'react'
import { Links } from './navbar/Links'
import { Navbar } from './navbar/Navbar'

export const Project = () => {
    return (
        <div className=''>
            {/* <Links /> */}
            <div className='about__content'>
                {/* <Navbar /> */}
                <div className='project__content animate__animated animate__fadeIn'>


                    <div className='project__android project__border'>

                        <img src="\assets\img\bread.png" height="150" alt="aplicaciom movil" />
                        <p>Aplicación móbil</p>
                    </div>
                    <div className='project__web project__border'>
                        <img src='\assets\img\car.jpg' height="150" alt="aplicacion web" />
                        <p>Aplicación web</p>
                    </div>


                </div>
            </div>
        </div>
    )
}
