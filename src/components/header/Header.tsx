import { Link } from 'react-router-dom';
import styles from "./header.module.css"
import { useContext } from 'react';
import { UserDataContext } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';


export default function Header() {
  const context = useContext(UserDataContext)
  const { user, updateUser } = context
  const { t } = useTranslation();

  const logOut = () => {
    updateUser({ isAuth: false, name: "" })
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.leftSide}>
          <Link className={styles.button} to="/">{t("mainpage")}</Link>
          <Link className={styles.button} to="/event">Календар подій</Link>
       
        {
          user.isAuth
            ?
            <>
              <Link className={styles.button} to="/articles">{t("articles")}</Link>
              <Link className={styles.button} to="/comments">{t("comments")}</Link>
            </>
            :
            null
        }
         </div>
        {user.isAuth ?
          <>
            <b className={styles.text}>{t("welcome") + '  ' + user.name + " *_*"}</b>
            <button className={styles.button} onClick={logOut}>{t("logout")}</button>
          </>
          :
          <div className={styles.rigthSide}>
            <Link className={styles.inbutton} to="/authorization">{t("login")}</Link>
            <Link className={styles.regbutton} to="/registration">{t("registration")}</ Link>
          </div>
        }
      </div>
    </>
  )
}
