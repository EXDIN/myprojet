import { Link } from 'react-router-dom'
import style from './page404.module.css'
import Pages from '../../routing/Pages'
import { undefinedBackgroundImage } from '../../URLS/urls'


export default function Page404() {
  return (
    <>
      <div className={style.main}>
        <video autoPlay loop muted className={style.backVideo}><source src={undefinedBackgroundImage} type="video/webm"></source></video>
        <div className={style.content}>
          <h3 className={style.text}>Сторінку не знайдено</h3>
          <Link to={Pages.Home} className={style.link}>Повернутися до головної</Link>
        </div>
      </div>
    </>
  )
}