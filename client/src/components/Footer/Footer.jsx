import style from './footer.module.css'

export default function Footer() {
    return <>
        <div className={style.footer}>
            <div className={style.info}>
                {['Terms & Conditions', 'Cookies', 'Contacts', 'Careers', 'Brand Guide'].map((el, i) => <p key={i}>{el}</p>)}
            </div>

            <div className={style.icons}>
                <p>Our social media:</p>

                <div className={style.wrapperIcons}>
                    <div className={style.fonIcon}>
                        {[style.twitter, style.facebook, style.instagram, style.linked, style.youtube, style.tiktok, style.telegram, style.vk].map((el, i) =>
                            <div key={i} className={style.fonIconBlue} >
                                <div className={el}></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    </>
}
// export default Footer;
