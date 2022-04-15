import React from 'react'

export const Project = () => {
    return (
        <div className='project__content animate__animated animate__fadeIn'>
            <div className='project__reducer'>

                <a href="https://drive.google.com/file/d/1VGEaZEqKtCsQQMqEtOAqMEBOuBJ_TR43/view?usp=sharing" download target="_blank" title="Projecto Android" rel="noreferrer">
                    <div className='project__android project__border'>
                        <img src="\assets\img\bread.png" height="150" alt="aplicaciom movil" />
                        <p>Prototipo aplicación móbil</p>
                    </div>
                </a>
            </div>
            <div className='project__reducer'>

                <div className='project__web project__border'>
                    <img src='\assets\img\car.jpg' height="150" alt="aplicacion web" />
                    <p>Aplicación web</p>
                </div>
            </div>
        </div>
    )
}
