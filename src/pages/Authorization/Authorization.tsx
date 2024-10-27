import style from "./authorization.module.css"
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserDataContext } from "../../context/AuthContext";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import myLocalJsonServer from "../../URLS/urls";
import { UserDataToLog, UserData } from "../../typesAndInterfaces";


const emptyUserDataToLog: UserDataToLog  = {
  email: "",
  password: ""
}

export default function Authorization() {
  const [userDataToLog, setUserDataToLog] = useState<UserDataToLog>(emptyUserDataToLog)
  const context = useContext(UserDataContext)
  const { user, updateUser } = context
  const navigate = useNavigate();
  const { t } = useTranslation();

  if(user.isAuth) {
    navigate('/');
  }
  
  const authorizationUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(myLocalJsonServer)
    .then(response => response.json())
    .then((users: UserData[]) => {
      const isLogIn: UserData[] = users.filter((user: UserData) => { return user.email === userDataToLog.email && String(user.password) === userDataToLog.password })
      
      if (isLogIn.length === 1) {
        updateUser({isAuth: true, name: isLogIn[0].name})
        navigate('/');
      } else {
        alert("Невірний логін чи пароль")
      }
    })
    .catch(e => console.log(e))
  }

  return (
    <>
      <Header/>
      <form className={style.authForm} onSubmit={authorizationUser}>
        <text>{t("authorization")}</text>
        <input type="email" id="email" className={style.inputs} placeholder={t("number/email")} required onChange={(e) => setUserDataToLog({...userDataToLog, email: String(e.currentTarget.value)})}/>
        <input type="password" id="password" className={style.inputs} placeholder={t("password")} required onChange={(e) => setUserDataToLog({...userDataToLog, password: String(e.currentTarget.value)})}/>
        <button type="submit" className={style.subButton}>{t("login")}</button>
      </form>
      <Footer/>
    </>
  )
}
