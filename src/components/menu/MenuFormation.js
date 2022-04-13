import { formation } from "../../data/formation";

export const MenuFormation = () => {
    return (
        <ul className="menu__text">
            {formation.map(boucle => <li className="menu__text-experience animate__animated animate__zoomIn" key={boucle.id}>{boucle.year} {' '}{boucle.title}</li>)}
        </ul>
    )
}
