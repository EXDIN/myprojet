import style from "./articles.module.css"
import { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { myLocalArticles } from "../../URLS/urls";
import { TypeBodyArticles } from "../../typesAndInterfaces";
import AddArticle from "./AddArticle/AddArticle";
import Article from "./Article/Article";


const emptyArticles: TypeBodyArticles[] = [
  {
    "id": "",
    "title": "",
    "body": "",
    "author": "",
    "date": ""
  }
]

export default function ArticlesPage() {
  const [ articles, setArticles ] = useState(emptyArticles);
  const [ arteclesFilter, setArteclesFilter ] = useState("");
  const { t } = useTranslation();
  const [ filteredArticles, setFilteredArticles ] = useState(emptyArticles);

  useEffect(() => {
    fetch(myLocalArticles)
    .then(response => response.json())
    .then(bdArticles => {
      setArticles(bdArticles); setFilteredArticles(bdArticles)
    })
  }, [])

  const deleteAtricle = async (id: string) => {
    const newArticles = articles.filter((el) => Number(el.id) != Number(id))
    setArticles([...newArticles])
    const response = await fetch(`${myLocalArticles}/${id}`, {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'},
    })

    if (!response.ok) {
      console.log(response);
    }
  }

  const updateArticle = async (newArticle: TypeBodyArticles) => {
    const otherAtricles = articles.filter((el) => String(el.id) != String(newArticle.id))
    setArticles([...otherAtricles, newArticle])
    await fetch(`${myLocalArticles}/${newArticle.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })
  }

  const onFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setArteclesFilter(e.target.value);
    setFilteredArticles(articles.filter((art) => art.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())))
  }
  
  return (
    // <>
      <div className={style.body}>
        <AddArticle></AddArticle>
        <input onChange={onFilter} value={arteclesFilter} className={style.filter} placeholder="Пошук по статтям"></input>
        <div className={style.bodyArticles}>
          {
          filteredArticles.length != 0
          ?
          filteredArticles.map((article) => 
              <Article key={article.id} article={article} onDelete={deleteAtricle} updateArticle={updateArticle} />
            )
          :
            <div className={style.emptyAtricles} style={{"height": "100%"}}>{t("emptyArticles")}</div>
          }
        </div>
      </div>
    // </>
  )
}
