import style from './home.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


function Home() {

    const arrInfoBlog = [{ description: 'Payment methods: Skrill, Neteller, webmoney, Bank transfer', date: '10.02.2023' },
    { description: 'Payment methods: Skrill, Neteller, webmoney, Bank transfer', date: '10.02.2023' },
    { description: 'Payment methods: Skrill, Neteller, webmoney, Bank transfer', date: '10.02.2023' },
    { description: 'Payment methods: Skrill, Neteller, webmoney, Bank transfer', date: '10.02.2023' },
    { description: 'Payment methods: Skrill, Neteller, webmoney, Bank transfer', date: '10.02.2023' },
    { description: 'Payment methods: Skrill, Neteller, webmoney, Bank transfer', date: '10.02.2023' },
    { description: 'Payment methods: Skrill, Neteller, webmoney, Bank transfer', date: '10.02.2023' }];

    return <>
        <Header />
        <div className={style.main}>
            <div className={style.block_title}>
                <h1>HOUSE OF</h1>
                <h1 className={style.blue}>GAMBLING</h1>
                <p>Raise your ROI with direct advertiser</p>
                <button>BECOME A PARTNER</button>

            </div>

            <div className={style.block_animation}>
                <div className={style.line_left}></div>
                <div className={style.line_center}></div>
                <div className={style.line_right}></div>
            </div>

            <div className={style.block_info}>
                <h3>BLOG</h3>
                    <div className={style.scroll}>
                        <div className={style.text_block}>
                            {arrInfoBlog.map((el, i) =>
                                <div key={i} className={style.text_item}>
                                    <h5>{el.description}</h5>
                                    <p>{el.date}</p>
                                </div>
                            )}
                        </div>
                     

                    </div>
                <div className={style.container}>

                </div>

            </div>

        </div>
        <Footer />
    </>
}
export default Home