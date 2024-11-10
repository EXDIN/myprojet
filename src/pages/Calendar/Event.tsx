import { Button, Layout, Modal, Row } from 'antd'
import CalendarComponent from './calendarComponent/Calendar'
import styles from "./Event.module.css"
import { useEffect, useState } from 'react';
import EventForm from './EventForm/EventForm';
import { useDispatch, useSelector } from 'react-redux';
import { TypeEvent } from '../../typesAndInterfaces';
import { addEvent, getAllEvents } from '../../store/slices/EventSlice';


export default function Event() {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const events = useSelector(getAllEvents);

  useEffect(() => {
    const sessionEvents = sessionStorage.getItem("sessionEvents");
    if (events.length === 0 &&  sessionEvents) {
      JSON.parse(sessionEvents).map((ev: TypeEvent) => dispatch(addEvent(ev)))
    }
  }, [])

  useEffect(() => {
    if (events) {
      sessionStorage.setItem("sessionEvents", JSON.stringify(events));
    }
  }, [events])

  const submit = (data: TypeEvent) => {
    dispatch(addEvent(data))
  }
  
  return (
    <div className={styles.Event}>
        <Layout>
            <CalendarComponent events={events}/>
            <Row justify='center'>
                <Button className={styles.addEventBotton} onClick={() => setModalVisible(true)}>Добавити подію
                </Button>
            </Row>
            <Modal
              title="Додати подію"
              open={modalVisible}
              footer={null}
              onCancel={() => setModalVisible(false)}
            >
              <EventForm submit={submit} setModalVisible={setModalVisible}></EventForm>
            </Modal>
        </Layout>
    </div>
  )
}
