import LanguageIcon from '@mui/icons-material/Language';
import style from './header.module.css'

function Header() {
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
            <button><LanguageIcon style={{color:'#9DADF2'}}></LanguageIcon> EN</button>
            <button>LOG IN</button>
            <button className={style.blue_button}>SIGN UP</button>
        </div>
    </div>
    </>
}
export default Header;