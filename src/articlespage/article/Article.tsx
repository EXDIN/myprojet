import { Save, Trash2 } from "lucide-react";
import { TypeBodyArticles } from "../../typesAndInterfaces";
import style from "./Article.module.css"
import { useState } from "react";


type TypeArticle = {
    article: TypeBodyArticles
    onDelete: (id: number) => void
}

export default function Article({article, onDelete}: TypeArticle) {
  const [ localArticle, setLocalArticle ] = useState(article)

  const localDel = () => {
    onDelete(localArticle.id)
  }

  return (
    <div className={style.allArticles}>
      <div className={style.formArticle}>
        <p className={style.artycleHeader}>{localArticle.title}</p>
        <text className={style.mainText}>{localArticle.body}</text>
        <div className={style.articleFooter}>
          <div>
            <text style={{'marginRight': '20px'}}>{localArticle.author}</text>
            <text style={{'marginRight': '20px'}}>|</text>
            <text>{localArticle.date}</text>
          </div>
          <div>
            <button className={style.button}><Save /></button>
            <button className={style.button} onClick={localDel}><Trash2 /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
