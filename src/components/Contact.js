import React from 'react';
import Githubs from '../assets/Githubs';
import Linkedin from '../assets/Linkedin';
import Pdf from '../assets/Pdf';
export const Contact = () => {

    return (
        <div>
            <div className='contact__content'>
                <div className='contact__images animate__animated animate__fadeIn'>
                    <div className='contact__img'>
                        <img src='/assets/img/IMG_5064-1.jpg' height='200' alt='JuanJosePina' />
                        <span className='contact__email'>juanjpina@gmail.com</span>
                    </div>

                    <div className='contact__icons'>
                        <a href='https://github.com/juanjpina'>
                            <Githubs />
                        </a>
                        <a href='https://www.linkedin.com/in/juanjos%C3%A9pina/'>
                            <Linkedin />
                        </a>
                    </div>
                    <div>
                        <a href="https://drive.google.com/file/d/1AW4v0Jus52A32fILPa2P3hMqlRiI5tJY/view?usp=sharing" download target="_blank" title="Curriculum vitae" rel="noreferrer">
                            <Pdf />
                        </a>
                    </div>

                </div>

            </div>


        </div >

    )
}
