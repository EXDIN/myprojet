import { useEffect, useRef, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import style from "./comments.module.css"
import { HandHeart, Pencil, Save, Trash2 } from "lucide-react";

type TypeComments = TypeComment[]

type TypeComment = {
  "id": number,
  "body": string,
  "postId": number,
  "likes": number,
  "edit"?: boolean,
  "user": {
    "id": number,
    "username": string,
    "fullName": string
  }
}

export default function Comments() {
  const [comments, setComments] = useState<TypeComments | []>([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const sessionCom = sessionStorage.getItem('allComments')
    let parseSession = null;
    if (sessionCom) {
      parseSession = JSON.parse(sessionCom)
    }

    if (!parseSession || parseSession.length == 0) {
      fetch('https://dummyjson.com/comments')
      .then(response => response.json())
      .then(data => setComments(data.comments))
      sessionStorage.setItem('allComments', JSON.stringify(comments))
    } else {   
      setComments(parseSession)
    }

  }, []);

  const getEdit = (comment: TypeComment, id: string, index: number) => {
    if (comment.edit) {
      comment.edit = false
    } else {
      comment.edit = true
    }
    let newText = document.getElementsByClassName(id)[index].textContent
    comment.body = String(newText)
    setComments([...comments])
    sessionStorage.setItem('allComments', JSON.stringify(comments))
  }

  const deleteComment = (index: number) => {
    comments!.splice(index, 1);
    setComments([...comments])
    sessionStorage.setItem('allComments', JSON.stringify(comments))
  }

  return (
    <>
      <Header></Header>
      <div className={style.allArticles}>
      {
        comments
        ? 
        comments.map((comment: TypeComment, index) => (
        <div key={comment.id} className={style.formArticle}>
          <div className={style.articleHeader}>
            <text>{comment.user.fullName}</text>
            <div className={style.likesForm}>
              <text>{comment.likes}</text>
              <HandHeart className={style.likeImj}/>
            </div>
          </div>
          <div className={style.mainText} contentEditable={comment.edit} ref={inputRef} style={comment.edit ? {'color': "#0074e0", 'padding': '5px'} : {}}>{comment.body}</div>
          <div className={style.articleFooter}>
            {
            !comment.edit
            ?
            <button className={style.button} onClick={(e) => getEdit(comments[index], style.mainText, index)}><Pencil /></button>
            :
            <button className={style.button} onClick={(e) => getEdit(comments[index], style.mainText, index)}><Save /></button>
            }
            <button className={style.button} onClick={(e) => deleteComment(index)}><Trash2 /></button>
          </div>
        </div>
        ))
        :
        <div className={style.emptyAtricles}>Завантаження</div>
      }
      </div>
      <Footer></Footer>
    </>
  )
}
