import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import style from "./articles.module.css"

type TypeBodyArticles = {
  title: string
  body: string
  author: string
  date: string
}

const arrData: TypeBodyArticles[] = [
  // {
  //   title: "Aliens",
  //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   author: "JOSH",
  //   date: "01.01.2000"
  // },
  // {
  //   title: "Aliens",
  //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   author: "JOSH",
  //   date: "01.01.2000"
  // },
  // {
  //   title: "Aliens",
  //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   author: "JOSH",
  //   date: "01.01.2000"
  // },
  // {
  //   title: "Aliens",
  //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   author: "JOSH",
  //   date: "01.01.2000"
  // },
  // {
  //   title: "Aliens",
  //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   author: "JOSH",
  //   date: "01.01.2000"
  // },
  // {
  //   title: "Aliens",
  //   body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //   author: "JOSH",
  //   date: "01.01.2000"
  // },
]

export default function ArticlesPage() {
  return (
    <>
      <Header></Header>
      <div className={style.allArticles}>
      {
      arrData[0]
        ? 
        arrData.map((art) => (
        <div key={art.title} className={style.formArticle}>
          <p className={style.artycleHeader}>{art.title}</p>
          <text className={style.mainText}>{art.body}</text>
          <div className={style.articleFooter}>
            <text>{art.author}</text>
            <text>{art.date}</text>
          </div>
        </div>
        ))
        :
        <div className={style.emptyAtricles}>Список статей порожній</div>
      }
      </div>
      <Footer></Footer>
    </>
  )
}
