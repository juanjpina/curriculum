

import { menuCV } from '../../data/menuCV';
import { MenuSkills } from './MenuSkills';
import { MenuExperience } from './MenuExperience';
export const Menu = () => {


    return (

        <ul>
            {menuCV.map(boucle => <li key={boucle.id} >{boucle.title}{boucle.id==='1'?  <MenuSkills />: boucle==='2'? <MenuExperience/> : 'd'} </li>)}


        </ul>

    )

}
