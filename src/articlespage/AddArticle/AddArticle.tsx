import { useEffect, useState } from "react"
import style from "./addArticle.module.css"
import ModalComponent from "../../components/ModalComponent/ModalCompont"
import { myLocalArticles } from "../../components/urls"
import { TypeBodyArticles } from "../../typesAndInterfaces"

const emptyArticles: TypeBodyArticles = {
    "id": 0,
    "title": "",
    "body": "",
    "author": "",
    "date": ""
}

export default function AddArticle() {
  const [ modalActive, setModalActive ] = useState(false)
  const [ data, setData ] = useState<TypeBodyArticles>(emptyArticles)

  // TODO Додати Автора з логіну та коректний id
  useEffect(() => {
    fetch(myLocalArticles)
    .then(response => response.json())
    .then(bdArticles => {
      setData({...data, id: (bdArticles.length + 1), date: String(new Date()), author: "David"})
    })
  }, [style.addButton])

  const addArticle = () => {
    fetch(myLocalArticles, {
      method: "POST",
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(data)
    })
    setData(emptyArticles)
  }

  return (
    <>
      <button className={style.addArticleButton} onClick={() => setModalActive(true)}>Додати нову статтю</button>
      {modalActive 
      ? 
      <ModalComponent active={modalActive} setActive={setModalActive}>
        <form className={style.form} onSubmit={addArticle}>
          <input className={style.titleName} onChange={(e) => setData({...data, title: e.currentTarget.value})} placeholder="Назва статті"></input>
          <textarea className={style.titleBody} onChange={(e) => setData({...data, body: e.currentTarget.value})} placeholder="Текст"></textarea>
          <button type="submit" className={style.addButton}>Додати статтю</button>
        </form>
      </ModalComponent> 
      : null}
    </>
  )
}
