import { useState } from 'react';
import { menuCV } from '../../data/menuCV';
import { MenuSkills } from './MenuSkills';
import { MenuExperience } from './MenuExperience';
import { MenuFormation } from './MenuFormation';
import { MenuLanguage } from './MenuLanguage';

export const Menu = () => {
    const [competencias, setCompetencias] = useState(false);
    const [formacion, setFormacion] = useState(false);
    const [experience, setExperience] = useState(false);
    const [language, setLanguage] = useState(false);

    const handleClickC = (e) => {
        e.preventDefault();
        setCompetencias(!competencias);
    }
    const handleClickF = (e) => {
        e.preventDefault();
        setFormacion(!formacion);
    }
    const handleClickE = (e) => {
        e.preventDefault();
        setExperience(!experience);
    }
    const handleClickL = (e) => {
        e.preventDefault();
        setLanguage(!language);
    }

    return (
        <ul>
            {menuCV.map(boucle => <li className="menu__list" key={boucle.id}  >
                {boucle.menu === 'Competencias' && <h3 className="menu__sublist" onClick={handleClickC}>{boucle.menu}</h3>}
                {boucle.menu === 'Competencias' && competencias && <MenuSkills />}
                {boucle.menu === 'Formación' && <h3 className="menu__sublist" onClick={handleClickF}>{boucle.menu}</h3>}
                {boucle.menu === 'Formación' && formacion && <MenuFormation />}
                {boucle.menu === 'Experiencia profesional' && <h3 className="menu__sublist" onClick={handleClickE}>{boucle.menu}</h3>}
                {boucle.menu === 'Experiencia profesional' && experience && <MenuExperience />}
                {boucle.menu === 'Idiomas y hobbies' && <h3 className="menu__sublist" onClick={handleClickL}>{boucle.menu}</h3>}
                {boucle.menu === 'Idiomas y hobbies' && language && <MenuLanguage />}
            </li>)}
        </ul>
    )
}
