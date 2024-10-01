import { useContext, useEffect, useState } from "react"
import style from "./addArticle.module.css"
import ModalComponent from "../../components/ModalComponent/ModalCompont"
import { myLocalArticles } from "../../components/urls"
import { TypeBodyArticles } from "../../typesAndInterfaces"
import { getCurrentDate } from "../../components/common"
import { UserDataContext } from "../../components/context/AuthContext"
import { useTranslation } from "react-i18next"

const emptyArticles: TypeBodyArticles = {
    "id": "",
    "title": "",
    "body": "",
    "author": "",
    "date": ""
}

export default function AddArticle() {
  const [ modalActive, setModalActive ] = useState(false)
  const { t } = useTranslation();
  const [ data, setData ] = useState<TypeBodyArticles>(emptyArticles)
  const context = useContext(UserDataContext)
  const { user } = context
  
  useEffect(() => {
    const addArtToData = async () => {
      const maxNum = await getMaxId()
      await setData({...data, id: String( maxNum + 1), date: String(getCurrentDate()), author: user.name})
    }

    addArtToData()

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
      <button className={style.addArticleButton} onClick={() => setModalActive(true)}>{t("addNewArticle")}</button>
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

async function getMaxId() {
  let maxNumber = 0;
  await fetch(myLocalArticles)
  .then(response => response.json())
  .then(articles => {
    maxNumber = Math.max(...articles.map((article: TypeBodyArticles) => article.id));
  })

  return maxNumber;
}
