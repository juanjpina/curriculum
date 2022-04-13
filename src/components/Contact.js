import React from 'react'
import { Links } from './navbar/Links'
import { Navbar } from './navbar/Navbar'

export const Contact = () => {


    return (
        <div>
            <div className=''>
                {/* <Links /> */}
            </div>
            <div className='about__content'>
                {/* <Navbar /> */}

                <div className='contact__images animate__animated animate__fadeIn'>

                    <div className='contact__img'>
                        <img src='/assets/img/IMG_5064.jpg' height='150' alt='JuanJosePina' />
                        <span className='contact__email'>juanjpina@gmail.com</span>
                    </div>

                    <div className='contact__icons'>
                        <a href='https://github.com/juanjpina'>
                            <img src='/assets/icons/github.png' height='20' alt="" />
                        </a>
                        <a href='https://www.linkedin.com/in/juanjos%C3%A9pina/'>
                            <img src='/assets/icons/linkedin.png' height='20' alt="" />
                        </a>
                    </div>

                </div>

            </div>


        </div >

    )
}
