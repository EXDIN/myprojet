import { Calendar } from 'antd'
import styles from "./calendar.module.css"


export default function CalendarComponent() {
  return (
    <>
        <div className={styles.mainBlock}>
         <Calendar ></Calendar>
        </div>
    </>
  )
}
