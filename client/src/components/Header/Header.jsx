import LanguageIcon from '@mui/icons-material/Language';
import style from './header.module.css'
import { useState } from 'react'

function Header() {
    const [language, setLanguage] = useState('EN');

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
                    <button  onClick={() => language === "EN" ? setLanguage('RU') : setLanguage('EN')}><LanguageIcon style={{ color: '#9DADF2' }}></LanguageIcon> EN</button>
                    <button>LOG IN</button>
                    <button className={style.blue_button}>SIGN UP</button>
                </div>
            </div>
        </div>
    </>

}
export default Header;