import React from 'react'
import { Links } from './navbar/Links'
import { Navbar } from './navbar/Navbar'

export const Project = () => {
    return (
        <div>
            <Links />
            <div className='about__content'>
                <Navbar />
                <div className='project__content'>

                    <div className='project__algo project__border'></div>
                    <div className='project__android project__border'></div>
                    <div className='project__web project__border'>
                        <iframe
                            src='https://unattainable-may.000webhostapp.com/'>

                        </iframe>
                    </div>


                </div>
            </div>
        </div>
    )
}
