import ModalComponent from "../../../components/ModalComponent/ModalCompont"
import { TypeBodyArticles } from "../../../typesAndInterfaces"
import style from "./viewwindow.module.css"


type TypeArticle = {
    article: TypeBodyArticles,
    modalWindowActive: boolean,
    setModalWindowActive: (arg0: boolean) => void
}

export default function ViewWindow({article, modalWindowActive, setModalWindowActive}: TypeArticle) {

    return (
        <>
          {modalWindowActive 
          ? 
          <ModalComponent active={modalWindowActive} setActive={setModalWindowActive}>
            <div className={style.form}>
                <div className={style.titleName}>{article.title}</div>
                <div className={style.titleBody}>{article.body}</div>
            </div>
          </ModalComponent> 
          : null}
        </>
    )
}
