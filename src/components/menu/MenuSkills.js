import React from 'react';
import { skills } from '../../data/skills';


export const MenuSkills = () => {
    return (
        <ul>
            {skills.map(boucle => <li key={boucle.id}>{boucle.title}</li>)}
        </ul>
    )
}
