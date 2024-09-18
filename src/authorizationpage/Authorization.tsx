import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import style from "./authorization.module.css"
import { useEffect, useState } from "react";

type UserDataToLog = {
  email: string,
  password: string
}

const emptyUserDataToLog: UserDataToLog = {
  email: "",
  password: ""
}

export default function Authorization() {
  const [userData, setUserData] = useState<UserDataToLog>(emptyUserDataToLog)

  useEffect(() => {

  }, [])

  const authorizationUser = () => {

  }

  return (
    <>
      <Header/>
      <form className={style.authForm} onSubmit={authorizationUser}>
        <text>Авторизація</text>
        <input type="email" id="email" className={style.inputs} placeholder="Електронна пошта або номер телефону" required onChange={(e) => setUserData({...userData, email: e.currentTarget.value})}/>
        <input type="password" id="password" className={style.inputs} placeholder="Пароль" required onChange={(e) => setUserData({...userData, password: e.currentTarget.value})}/>
        <button type="submit" className={style.subButton}>Увійти до аккаунту</button>
      </form>
      <Footer/>
    </>
  )
}
