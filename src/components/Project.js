import React from 'react'

export const Project = () => {
    return (
        <div className='project__content animate__animated animate__fadeIn'>
            <div className='project__reducer'>

                <a href="https://drive.google.com/file/d/1VGEaZEqKtCsQQMqEtOAqMEBOuBJ_TR43/view?usp=sharing" download target="_blank" rel="noreferrer">
                    <div className='project__border'>
                        <p className='project__img'>
                            Proyecto Android/Java
                            Versión Alfa
                        </p>
                        <img className='project__imb-bread' src="\assets\img\bread150.png" width="15" alt="aplicaciom movil" />
                        <p>Prototipo aplicación móbil</p>
                    </div>
                </a>
            </div>
            <div className='project__reducer'>
                <a href='http://car.juanjpina.com/' download target="_blank" rel="noreferrer">
                    <div className='project__border'>
                        <p className='project__img'>
                            Proyecto web/móvil
                            PHP/SQL<br />
                            Versión Alfa
                        </p>
                        <img src='\assets\img\car.jpg' width="150" alt="aplicacion web" />
                        <p>Aplicación web</p>
                    </div>
                </a>
            </div>
        </div>
    )
}
