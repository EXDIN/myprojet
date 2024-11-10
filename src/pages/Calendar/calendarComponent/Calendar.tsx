import { Calendar } from 'antd'
import styles from "./calendar.module.css"
import { TypeEvent } from '../../../typesAndInterfaces'
import { Moment } from 'moment'
import { FC } from 'react'

interface EventCalendarProps {
  events: TypeEvent[],
}

const CalendarComponent: FC<EventCalendarProps> = (props) => {
  function dateCellRender(value: Moment) {
    const date = value.format("YYYY-MM-DD")
    const currentDayEvent = props.events.filter(ev => ev.date === date)
    return (
      <ul className='events'>
        {
          currentDayEvent.map((ev, index) =>
            <div key={index}>
              {`${ev.description} - ${ev.author}`}
            </div>
          )
        }
      </ul>
    )
  }
  return (
    <div className={styles.mainBlock}>
      <Calendar cellRender={(value) => dateCellRender(value as Moment)}>

      </Calendar>
    </div>
  )
}

export default CalendarComponent;
