import { Link } from 'react-router-dom';
import styles from "./header.module.css"
import { useContext } from 'react';
import { UserDataContext } from '../context/AuthContext';


export default function Header () {
  const context = useContext(UserDataContext)
  const { user, updateUser } = context

  const logOut = () => {
    updateUser({isAuth: false, name: ""})
  }

  return (
    <>
      <div className={styles.header}>
        <div>
          {/* <b className={styles.text}>Привіт, це Header сайту</b> */}
          <Link className={styles.button} to="/">Головна сторінка</Link>
          <Link className={styles.button} to="/articles">Статті</Link>
        </div>
        { user.isAuth ?
          <>
            <b className={styles.text}>{'Welcome  '+user.name+" *_*"}</b>
            <button className={styles.button} onClick={logOut}>Вийти з акаунта</button>
          </>
          :
          <div >
            <Link className={styles.inbutton} to="/authorization">Увійти</Link>
            <Link className={styles.regbutton} to="/registration">Зареєструватися </ Link>
          </div>
        }
      </div>
    </>
  )
}
