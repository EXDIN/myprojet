import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import style from "./articles.module.css"
import { useEffect, useState } from "react";
import Article from "./Article/Article";
import { TypeBodyArticles } from "../typesAndInterfaces";
import { myLocalArticles } from "../components/urls";
import AddArticle from "./AddArticle/AddArticle";


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

  useEffect(() => {
    fetch(myLocalArticles)
    .then(response => response.json())
    .then(bdArticles => {
      setArticles(bdArticles)
    })
  }, [])


  const deleteAtricle = async (id: string) => {
    const newArticles = articles.filter((el) => Number(el.id) != Number(id))
    await setArticles([...newArticles])
    const response = await fetch(`${myLocalArticles}/${id}`, {
      method: "DELETE",
      headers: {'Content-Type': 'application/json'},
    })

    if (!response.ok) {
      console.log(response);
    }
  }

  const updateArticle = (newArticle: TypeBodyArticles) => {
    const otherAtricles = articles.filter((el) => String(el.id) != String(newArticle.id))
    setArticles([...otherAtricles, newArticle])
    fetch(`${myLocalArticles}/${newArticle.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newArticle)
    })
  }
  
  return (
    <>
      <Header></Header>
      <div className={style.body}>
        <AddArticle></AddArticle>
        <div className={style.bodyArticles}>
          {
          articles.length != 0
          ?
            articles.map((article) => 
              <Article key={article.id} article={article} onDelete={deleteAtricle} updateArticle={updateArticle} />
            )
          :
            <div className={style.emptyAtricles}>Список статей порожній</div>
          }
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
