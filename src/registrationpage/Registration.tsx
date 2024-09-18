import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import style from "./registration.module.css"

type UserData = {
  name: string,
  age: string,
  email: string,
  password: string
}

const emptyUserData: UserData = {
  name: "",
  age: "",
  email: "",
  password: ""
}

export default function Registration() {
  const [userData, setUserData] = useState<UserData>(emptyUserData)
  const [currentUsersEmails, setCurrentUsersEmails] = useState<string[]>([])

  useEffect(() => {
    fetch("http://localhost:3005/users")
    .then(response => response.json())
    .then(users => {
      const emails = users.map((user: UserData) => {return user.email})
      setCurrentUsersEmails(emails)
    })
  }, [])

  const createUser = () => {
    if (currentUsersEmails.indexOf(userData.email) === -1) {
      fetch("http://localhost:3005/users", {
        method: "POST",
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(userData)
      })
      alert("Ви успішно зареєстровані!\nАвторизуйтесь в системі")
    } else {
      alert("Користувач з даним EMAIL вже існує в системі!")
    }
  }

  return (
    <>
      <Header/>
      <form className={style.regForm} onSubmit={createUser}>
        <text>Реєстрація в системі</text>
        <input type="text" id="name" className={style.inputs} placeholder="Ваше ім'я" required onChange={(e) => setUserData({...userData, name: e.currentTarget.value})}/>
        <input type="date" id="birthDate" className={style.inputs} placeholder="Ваше ім'я" required onChange={(e) => setUserData({...userData, age: e.currentTarget.value})}/>
        <input type="email" id="email" className={style.inputs} placeholder="Електронна пошта або номер телефону" required onChange={(e) => setUserData({...userData, email: e.currentTarget.value})}/>
        <input type="password" id="password" className={style.inputs} placeholder="Пароль" required onChange={(e) => setUserData({...userData, password: e.currentTarget.value})}/>
        <button type="submit" className={style.subbutton}>Зареєструватися</button>
      </form>
      <Footer/>
    </>
  )
}
