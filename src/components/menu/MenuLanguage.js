import { language } from "../../data/language";

export const MenuLanguage = () => {
    return (
        <ul className="menu__text">
            {language.map(boucle => <li className="menu__text-experience  animate__animated animate__fadeInDown" key={boucle.id}>{boucle.title}</li>)}
        </ul>
    )
}
