import style from './header.module.css'
import { useState } from 'react'

export default function Header() {
    const [language, setLanguage] = useState('EN');
    const [menuOpen, setMenuOpen] = useState(false);

    const changeLanguage = () => setLanguage(language === 'EN' ? 'RU' : 'EN')
    const toggleMenu = () => setMenuOpen(!menuOpen);
    
    return <>
        <div className={style.wrapper}>
            <input type="text" />
            <div className={style.menu}>
                {['About us', 'Brands', 'Commissions', 'News', 'Contact us', 'Careers'].map((el, i) => <p key={i}>{el}</p>)}
            </div>
            <div className={style.buttons}>
                <button className={style.language_button} onClick={changeLanguage}><div className={style.icon}></div>{language}</button>
                <button className={style.drop_down_menu} onClick={toggleMenu}><div className={style.icon_burger}></div></button>
                <button className={style.btn_blue}>LOG IN</button>
                <button className={style.btn_blue}>SIGN UP</button>
            </div>
            {menuOpen && (
                    <div className={style.dropdown}>
                        {['About us', 'Brands', 'Commissions', 'News', 'Contact us', 'Careers'].map((el, i) => (
                            <p key={i}>{el}</p>
                        ))}
                        <button className={style.btn_blue}>LOG IN</button>
                        <button className={style.btn_blue}>SIGN UP</button>
                    </div>
                )}
        </div>
    </>

}