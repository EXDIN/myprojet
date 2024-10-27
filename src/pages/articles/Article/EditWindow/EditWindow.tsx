import { useContext, useState } from "react"
import style from "./editwindow.module.css"
import { getCurrentDate } from "../../../../components/common"
import { UserDataContext } from "../../../../context/AuthContext"
import ModalComponent from "../../../../components/ModalComponent/ModalCompont"
import { TypeBodyArticles } from "../../../../typesAndInterfaces"


type TypeArticle = {
  article: TypeBodyArticles,
  modalActive: boolean,
  setModalActive: (arg0: boolean) => void
  updateArticle: (data: TypeBodyArticles) => void
}

export default function EditWindow({article, modalActive, setModalActive, updateArticle}: TypeArticle) {
  const [ data, setData ] = useState<TypeBodyArticles>(article)
  const context = useContext(UserDataContext)
  const { user } = context

  const onLocalUpdate = () => {
    const newData = {...data, date: getCurrentDate(), author: user.name}
    setData(newData)
    updateArticle(newData)
  }

  return (
    <>
      {modalActive 
      ? 
      <ModalComponent active={modalActive} setActive={setModalActive}>
        <form className={style.form} onSubmit={onLocalUpdate}>
          <input className={style.titleName} onChange={(e) => setData({...data, title: e.currentTarget.value})} value={data.title}></input>
          <textarea className={style.titleBody} onChange={(e) => setData({...data, body: e.currentTarget.value})} value={data.body}></textarea>
          <button type="submit" className={style.addButton}>Збререгти зміни</button>
        </form>
      </ModalComponent> 
      : null}
    </>

  )
}
