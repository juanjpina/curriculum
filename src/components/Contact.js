import React from 'react'

export const Contact = () => {


    return (
        <div>

            <div className='contact__content'>


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
                    <div>
                        <a href="https://drive.google.com/file/d/1AW4v0Jus52A32fILPa2P3hMqlRiI5tJY/view?usp=sharing" download target="_blank" title="Curriculum vitae" rel="noreferrer"><img src='/assets/icons/pdf.png' height='45' alt='curriculum' /></a>
                    </div>

                </div>

            </div>


        </div >

    )
}
