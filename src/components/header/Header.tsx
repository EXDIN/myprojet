import { Link } from 'react-router-dom';
import styles from "./header.module.css"
import { useContext } from 'react';
import { UserDataContext } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import Pages from '../../routing/Pages';


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
          <Link className={styles.button} to={Pages.Home}>{t("mainpage")}</Link>
          <Link className={styles.button} to={Pages.Event}>Календар подій</Link>
       
        {
          user.isAuth
            ?
            <>
              <Link className={styles.button} to={Pages.Articles}>{t("articles")}</Link>
              <Link className={styles.button} to={Pages.Comments}>{t("comments")}</Link>
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
            <Link className={styles.inbutton} to={Pages.Authorization}>{t("login")}</Link>
            <Link className={styles.regbutton} to={Pages.Registration}>{t("registration")}</ Link>
          </div>
        }
      </div>
    </>
  )
}
