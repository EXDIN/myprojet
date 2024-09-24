import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import style from "./articles.module.css"
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../components/context/AuthContext";
import Article from "./article/Article";
import { TypeBodyArticles } from "../typesAndInterfaces";


const arrData: TypeBodyArticles[] = [
  {
    id: 1,
    title: "Aliens",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "JOSH",
    date: "01.01.2000"
  },
  {
    id: 2,
    title: "Aliens",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "JOSH",
    date: "01.01.2000"
  },
  {
    id: 3,
    title: "Aliens",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "JOSH",
    date: "01.01.2000"
  },
  {
    id: 4,
    title: "Aliens",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "JOSH",
    date: "01.01.2000"
  },
  {
    id: 5,
    title: "Aliens",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "JOSH",
    date: "01.01.2000"
  },
  {
    id: 6,
    title: "Aliens",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "JOSH",
    date: "01.01.2000"
  },
]

export default function ArticlesPage() {
  const [ articles, setArticles ] = useState(arrData);
  const context = useContext(UserDataContext)
  const { user } = context
  const navigate = useNavigate();

  useEffect(() => {
    const sessionCom = sessionStorage.getItem('articles')
    let parseSession = null;
    if (sessionCom) {
      parseSession = JSON.parse(sessionCom)
    }

    if (!parseSession || parseSession.length == 0) {
      sessionStorage.setItem('articles', JSON.stringify(articles))
    } else {
      setArticles(parseSession)
    }
  }, [])

  // useEffect(() => {
  //   if(!user.isAuth) {
  //     navigate('/');
  //   }
  // }, [])

  const deleteAtricle = (id: number) => {
    const newArticles = articles.filter((el) => el.id != id)
    setArticles([...newArticles])
    sessionStorage.setItem('articles', JSON.stringify(newArticles))
  }
  
  return (
    <>
      <Header></Header>
      {
      articles.length != 0
      ?
        articles.map((article) => 
          (<Article key={article.id} article={article} onDelete={deleteAtricle} />)
        )
      :
        <div className={style.emptyAtricles}>Список статей порожній</div>
      }
      <Footer></Footer>
    </>
  )
}
