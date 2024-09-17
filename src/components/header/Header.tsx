import { Link } from 'react-router-dom';
import styles from "./header.module.css"


export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <b className={styles.text}>Привіт, це Header сайту</b>
        <div >
          <button className={styles.inbutton}>Увійти</button>
          <Link className={styles.regbutton} to="/registration">Зареєструватися </ Link>
        </div>
      </div>
    </>
  )
}
