import style from "./footer.module.css"
import linkdn from "../../image/linkedin.png"
import { myLinkd } from "../urls"
import { Globe } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

type TypeLanguage = "uk" | "en"


export default function Footer() {
  const [ language, setLanguage ] = useState<TypeLanguage>("uk")
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    let newLanguage: TypeLanguage = "uk"
    if (language === "uk") {
      newLanguage = "en"
    }
    setLanguage(newLanguage)
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={style.footer}>
      <div>
        <a href={myLinkd}>
          <img src={linkdn} className={style.linked}/>
        </a>
        <text>© Lila Entertainment, Inc., 2024</text>
      </div>
      <button className={style.language} onClick={() => changeLanguage()}><Globe className={style.ikon}></Globe>{language}</button>
    </div>
  )
}
