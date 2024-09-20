import { Link } from 'react-router-dom';
import styles from "./header.module.css"
import { useContext } from 'react';
import { UserDataContext } from '../context/AuthContext';


export default function Header() {
  const context = useContext(UserDataContext)
  const { user } = context

  return (
    <>
      <div className={styles.header}>
        <b className={styles.text}>Привіт, це Header сайту</b>
        <b className={styles.text}>{user.isAuth ? 'Hiiii  '+user.name : null}</b>
        <div >
          <Link className={styles.inbutton} to="/authorization">Увійти</Link>
          <Link className={styles.regbutton} to="/registration">Зареєструватися </ Link>
        </div>
      </div>
    </>
  )
}
