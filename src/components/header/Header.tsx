import { Link } from 'react-router-dom';
import styles from "./header.module.css"


export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <b className={styles.text}>Привіт, це Header сайту</b>
        <div >
          <Link className={styles.inbutton} to="/authorization">Увійти</Link>
          <Link className={styles.regbutton} to="/registration">Зареєструватися </ Link>
        </div>
      </div>
    </>
  )
}
