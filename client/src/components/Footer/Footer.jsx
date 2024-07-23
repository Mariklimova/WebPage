import style from './footer.module.css'

function Footer() {
    return <>
        <div className={style.footer}>
            <div className={style.info}>
                <p>Terms & Conditions</p>
                <p>Cookies</p>
                <p>Contacts</p>
                <p>Careers</p>
                <p>Brand Guide</p>
            </div>

            <div className={style.icons}>
                <p>Our social media:</p>
            
                <div className={style.wrapperIcons}>
                    <div className={style.fonIcon}>
                        <div className={style.fonIconBlue} >
                            <div className={style.twitter}></div>
                        </div>
                        <div className={style.fonIconBlue} >
                            <div className={style.facebook}></div>
                        </div>
                        <div className={style.fonIconBlue} >
                            <div className={style.instagram}></div>
                        </div>
                        <div className={style.fonIconBlue} >
                            <div className={style.linked}></div>
                        </div>
                        <div className={style.fonIconBlue} >
                            <div className={style.youtube}></div>
                        </div>
                        <div className={style.fonIconBlue} >
                            <div className={style.tiktok}></div>
                        </div>
                        <div className={style.fonIconBlue} >
                            <div className={style.telegram}></div>
                        </div>
                        <div className={style.fonIconBlue} >
                            <div className={style.vk}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>
}
export default Footer;
