import { experience } from "../../data/experience";

export const MenuExperience = () => {
    return (
        <ul className="menu__text">
            {experience.map(boucle => <li className="menu__text-experience animate__animated animate__zoomIn" key={boucle.id}>{boucle.year} {' '}{boucle.title}</li>)}
        </ul>
    )
}
