import styles from "./footer.module.css"
import linkdn from "../../image/linkedin.png"

const myLinkd = "https://www.linkedin.com/in/ivan-lila/"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href={myLinkd}>
        <img src={linkdn} className={styles.linked}/>
      </a>
      <text>© Lila Entertainment, Inc., 2024</text>
    </div>
  )
}
