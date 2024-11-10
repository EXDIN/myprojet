import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { FC, useEffect, useState } from 'react'
import { TypeEvent } from '../../../typesAndInterfaces';
import { Moment } from 'moment';
import moment from 'moment';


interface IProps {
	submit: (event: TypeEvent) => void,
	setModalVisible: (visible: boolean) => void,
}

const defaultValue: TypeEvent = {
	author: "",
	date: moment().format("YYYY-MM-DD"),
	description: "",
}


const EventForm: FC<IProps> = (props) => {
	const [ event, setEvent ] = useState<TypeEvent>(defaultValue)

	useEffect(() => {
		const sessUser = sessionStorage.getItem("sessionUserData");
		if (sessUser) {
			const userName = JSON.parse(sessUser).name
			setEvent({...event, author: userName})
		}
	}, [])
	

	const handleDate = (date: Moment | null) => {
		if (date) {
			setEvent({...event, date: date.format("YYYY-MM-DD")})
		}
	}

	const submitForm = () => {
		props.submit(event)
		props.setModalVisible(false)
		setEvent(defaultValue)
	}
  
  return (
    <Form>
        <Form.Item
					label="Опис події"
					name="description"
        >
          <Input defaultValue={""} onChange={(e) => setEvent({...event, description: e.target.value})} value={event.description}></Input>
        </Form.Item>
        <Form.Item
					label="Дата події"
					name="date"
        >
          <DatePicker defaultValue={moment()} onChange={(date: Moment) => handleDate(date)}></DatePicker>
        </Form.Item>
        <Form.Item
					label="Автор"
					name="author"
        >
          <Select onChange={(value) => setEvent({...event, author: value})}>
						<Select.Option value={"Загальний користувач"}>
							{"Загальний користувач"}
						</Select.Option>
						{event.author ? 
							<Select.Option value={event.author}>
								{event.author}
							</Select.Option>
							: null
						}
					</Select>
        </Form.Item>
        <Row justify='end'>
					<Form.Item>
							<Button onClick={submitForm}>Створити</Button>
					</Form.Item>
        </Row>
    </Form>
  )
}


export default EventForm;