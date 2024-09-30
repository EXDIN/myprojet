import style from "./footer.module.css"
import linkdn from "../../image/linkedin.png"
import { myLinkd } from "../urls"
import { Globe } from "lucide-react"
import { useEffect, useState } from "react"
import { LANGUAGE } from "../common"
import { useLocation, useNavigate } from "react-router-dom"


export default function Footer() {
  const [ language, setLanguage ] = useState<number>(LANGUAGE.UA)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currLanguage = Number(localStorage.getItem('userLanguage'));
    if (currLanguage) {
      setLanguage(currLanguage)
    } else {
      localStorage.setItem('userLanguage', JSON.stringify(LANGUAGE.UA));
    }
  }, [style.language])

  const changeLanguage = () => {
    let newLanguage = LANGUAGE.UA
    if (language === LANGUAGE.UA) {
      newLanguage = LANGUAGE.EN
    } 
    setLanguage(newLanguage)
    localStorage.setItem('userLanguage', JSON.stringify(newLanguage));
    // window.location.reload();
    navigate("/")
  }

  return (
    <div className={style.footer}>
      <div>
        <a href={myLinkd}>
          <img src={linkdn} className={style.linked}/>
        </a>
        <text>© Lila Entertainment, Inc., 2024</text>
      </div>
      <button className={style.language} onClick={changeLanguage}><Globe className={style.ikon}></Globe>{LANGUAGE[language]}</button>
    </div>
  )
}
