import { useContext, useEffect, useState } from "react";
import style from "./registration.module.css"
import myLocalJsonServer from "../../URLS/urls";
import { UserDataContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../typesAndInterfaces";
import { useTranslation } from "react-i18next";


const emptyUserData: UserData = {
  name: "",
  age: "",
  email: "",
  password: ""
}

export default function Registration() {
  const [userData, setUserData] = useState<UserData>(emptyUserData)
  const [currentUsersEmails, setCurrentUsersEmails] = useState<string[]>([])
  const context = useContext(UserDataContext)
  const { user } = context
  const navigate = useNavigate();
  const { t } = useTranslation();

  if(user.isAuth) {
      navigate('/');
  }

  useEffect(() => {
    fetch(myLocalJsonServer)
    .then(response => response.json())
    .then(users => {
      const emails = users.map((user: UserData) => {return user.email})
      setCurrentUsersEmails(emails)
    })
  }, [])

  const createUser = () => {
    if (currentUsersEmails.indexOf(userData.email) === -1) {
      fetch(myLocalJsonServer, {
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
      <form className={style.regForm} onSubmit={createUser}>
        <text>{t("registration")}</text>
        <input type="text" id="name" className={style.inputs} placeholder={t("yourName")} required onChange={(e) => setUserData({...userData, name: e.currentTarget.value})}/>
        <input type="date" id="birthDate" className={style.inputs} required onChange={(e) => setUserData({...userData, age: e.currentTarget.value})}/>
        <input type="email" id="email" className={style.inputs} placeholder={t("number/email")} required onChange={(e) => setUserData({...userData, email: e.currentTarget.value})}/>
        <input type="password" id="password" className={style.inputs} placeholder={t("password")} required onChange={(e) => setUserData({...userData, password: e.currentTarget.value})}/>
        <button type="submit" className={style.subbutton}>{t("createUser")}</button>
      </form>
    </>
  )
}
