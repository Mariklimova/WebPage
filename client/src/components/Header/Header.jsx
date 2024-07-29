import style from './header.module.css'
import { useState } from 'react'

export default function Header() {
    const [language, setLanguage] = useState('EN');
    const changeLanguage = () => setLanguage(language == 'EN' ? 'RU' : 'EN')
    return <>
        <div className={style.wrapper}>
            <input type="text" />
            <div className={style.menu}>
                <p>About us</p>
                <p>Brands</p>
                <p>Commissions</p>
                <p>News</p>
                <p>Contact us</p>
                <p>Careers</p>
            </div>
            <div className={style.buttons}>
                <div className={style.buttons}>
                    <div><button onClick={changeLanguage}><div className={style.icon}></div>{language}</button></div>
                    <button className={style.btn_blue}>LOG IN</button>
                    <button className={style.btn_blue}>SIGN UP</button>
                </div>
            </div>
        </div>
    </>

}