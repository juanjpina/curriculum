import { language } from "../../data/language";

export const MenuLanguage = () => {
    return (
        <ul className="menu__text animate__animated animate__zoomIn">
            {language.map(boucle => <li className="menu__text-experience" key={boucle.id}>{boucle.title}</li>)}
        </ul>
    )
}
