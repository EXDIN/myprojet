import { Pencil, Save, Trash2 } from "lucide-react";
import { TypeBodyArticles } from "../../typesAndInterfaces";
import style from "./Article.module.css"
import { useState } from "react";
import EditWindow from "../EditWindow/EditWindow";


type TypeArticle = {
    article: TypeBodyArticles
    onDelete: (id: number) => void
}

export default function Article({article, onDelete}: TypeArticle) {
  const [ modalActive, setModalActive ] = useState(false)

  const localDel = () => {
    onDelete(article.id)
  }

  const localEdit = () => {
    setModalActive(true)
  }

  return (
    <>
    <div className={style.allArticles}>
      <div className={style.formArticle}>
        <p className={style.artycleHeader}>{article.title}</p>
        <text className={style.mainText}>{article.body}</text>
        <div className={style.articleFooter}>
          <div>
            <text style={{'marginRight': '20px'}}>{article.author}</text>
            <text style={{'marginRight': '20px'}}>|</text>
            <text>{article.date}</text>
          </div>
          <div>
            <button className={style.button} onClick={localEdit}><Pencil /></button>
            <button className={style.button} onClick={localDel}><Trash2 /></button>
          </div>
        </div>
      </div>
    </div>
    {modalActive ? <EditWindow active={modalActive} setActive={setModalActive}></EditWindow> : null}
    </>
  )
}
