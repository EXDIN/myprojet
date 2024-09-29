import { Pencil, Trash2 } from "lucide-react";
import { TypeBodyArticles } from "../../typesAndInterfaces";
import style from "./Article.module.css"
import { useState } from "react";
import EditWindow from "../EditWindow/EditWindow";


type TypeArticle = {
    article: TypeBodyArticles
    onDelete: (id: string) => void
    updateArticle: (newArticle: TypeBodyArticles) => void
}

export default function Article({article, onDelete, updateArticle}: TypeArticle) {
  const [ modalActive, setModalActive ] = useState(false)

  const openEdit = () => {
    setModalActive(true)
  }

  return (
    <>
      <div className={style.formArticle}>
        <p className={style.artycleHeader}>{article.title}</p>
        <div className={style.mainText}>{article.body}</div>
        <div className={style.articleFooter}>
          <div>
            <text style={{'marginRight': '20px'}}>{article.author}</text>
            <text style={{'marginRight': '20px'}}>|</text>
            <text>{article.date}</text>
          </div>
          <div>
            <button className={style.button} onClick={openEdit}><Pencil /></button>
            <button className={style.button} onClick={() => onDelete(article.id)}><Trash2 /></button>
          </div>
        </div>
      </div>
    {<EditWindow article={article} updateArticle={updateArticle} modalActive={modalActive} setModalActive={setModalActive}></EditWindow>}
    </>
  )
}
