import { experience } from "../../data/experience";

export const MenuExperience = () => {
    return (
        <ul>
            {experience.map(boucle => <li key={boucle.id}>{boucle.year}{boucle.title}</li>)}
        </ul>
    )
}
