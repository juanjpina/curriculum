import React from 'react';
import { skills } from '../../data/skills';


export const MenuSkills = () => {
    return (
        <ul className='menu__text-skills'>
            {skills.map(boucle => <li className='menu__Skills-list  animate__animated animate__fadeInDown' key={boucle.id}><i className={boucle.title}></i></li>)}
        </ul>
    )
}
