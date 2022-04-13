import React from 'react';
import { skills } from '../../data/skills';


export const MenuSkills = () => {
    return (
        <ul className='menu__text-skills animate__animated animate__zoomIn'>
            {skills.map(boucle => <li className='menu__Skills-list' key={boucle.id}><i className={boucle.title}></i></li>)}
        </ul>
    )
}
