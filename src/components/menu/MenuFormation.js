import { formation } from "../../data/formation";

export const MenuFormation = () => {
    return (
        <ul className="menu__text animate__animated animate__zoomIn">
            {formation.map(boucle => <li className="menu__text-experience" key={boucle.id}>{boucle.year} {' '}{boucle.title}</li>)}
        </ul>
    )
}
