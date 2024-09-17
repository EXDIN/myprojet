import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import style from "./registration.module.css"

export default function Registration() {
  return (
    <>
      <Header/>
      <form className={style.regForm}>
        <text>Реєстрація для побачення</text>
        <input type="email" id="email" className={style.inputs} placeholder="Електронна пошта або номер телефону" required/>
        <input type="password" id="password" className={style.inputs} placeholder="Пароль" required/>
        <button type="submit" className={style.subbutton}>Чекаю тебе котик</button>
      </form>
      <Footer/>
    </>
  )
}
