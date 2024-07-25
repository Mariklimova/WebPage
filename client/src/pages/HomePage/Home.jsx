import style from './home.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


function Home() {



    return <>
        <Header/>

        <div className={style.blok_left}>
            <h1>HOUSE OF</h1>
            <h1 className={style.blue}>GAMBLING</h1>
            <p>Raise your ROI with direct advertiser</p>
            <button>BECOME A PARTNER</button>

        </div>

        <div className={style.blok_center}>
            <div className={style.line_left}></div>
            <div className={style.line_center}></div>
            <div className={style.line_right}></div>
        </div>

        <div className={style.blok_right}>
            <h3>BLOG</h3>
            <div className={style.container}>
                <div className={style.scroll_bar}>
                    <div className={style.text}>
                        <div className={style.text_blok}>
                            <h5>Payment methods: Skrill, Neteller, webmoney, Bank transfer</h5>
                            <p>10.02.2023</p>
                        </div>

                        <div className={style.text_blok}>
                            <h5>Payment methods: Skrill, Neteller, webmoney, Bank transfer</h5>
                            <p>10.02.2023</p>
                        </div>

                        <div className={style.text_blok}>
                            <h5>Payment methods: Skrill, Neteller, webmoney, Bank transfer</h5>
                            <p>10.02.2023</p>
                        </div>

                        <div className={style.text_blok}>
                            <h5>Payment methods: Skrill, Neteller, webmoney, Bank transfer</h5>
                            <p>10.02.2023</p>
                        </div>

                        <div className={style.text_blok}>
                            <h5>Payment methods: Skrill, Neteller, webmoney, Bank transfer</h5>
                            <p>10.02.2023</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    <Footer/>
    </>
}
export default Home