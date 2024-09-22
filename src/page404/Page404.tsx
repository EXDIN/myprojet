import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom'
import style from './page404.module.css'

export default function Page404() {
  return (
    <>
        <Header></Header>
        <div className={style.main}> 
            <video autoPlay loop muted className={style.backVideo}><source src="https://bnetcmsus-a.akamaihd.net/cms/gallery/kr/KRYSJPOOWXX51496179560105.mp4" type="video/webm"></source></video>
            <div className={style.content}>
                <h3 className={style.text}>Сторінку не знайдено</h3>
                <Link to="/" className={style.link}>Повернутися до головної</Link>
            </div>
        </div>
        <Footer></Footer>
    </>
  )
}
