import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import style from "./authorization.module.css"
import { useContext, useState } from "react";
import { UserDataContext } from '../components/context/AuthContext';
import myLocalJsonServer from "../components/urls";
import { useNavigate } from 'react-router-dom';
import { UserData, UserDataToLog } from '../typesAndInterfaces';


const emptyUserDataToLog: UserDataToLog  = {
  email: "",
  password: ""
}

export default function Authorization() {
  const [userDataToLog, setUserDataToLog] = useState<UserDataToLog>(emptyUserDataToLog)
  const context = useContext(UserDataContext)
  const { user, updateUser } = context
  const navigate = useNavigate();

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
        <text>Авторизація {user.name}</text>
        <input type="email" id="email" className={style.inputs} placeholder="Електронна пошта або номер телефону" required onChange={(e) => setUserDataToLog({...userDataToLog, email: String(e.currentTarget.value)})}/>
        <input type="password" id="password" className={style.inputs} placeholder="Пароль" required onChange={(e) => setUserDataToLog({...userDataToLog, password: String(e.currentTarget.value)})}/>
        <button type="submit" className={style.subButton}>Увійти до аккаунту</button>
      </form>
      <Footer/>
    </>
  )
}
