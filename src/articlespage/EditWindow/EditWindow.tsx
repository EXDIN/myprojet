import style from "./editwindow.module.css"


type TypeEditWindiw = {
    active: boolean,
    setActive: (isActive: boolean) => void,
}

export default function EditWindow({active, setActive}: TypeEditWindiw) {
  console.log(active+" "+setActive);
  

  return (
    <div className={style.modal} onClick={() => setActive(false)}>
      <div className={style.modalContent} onClick={e => e.stopPropagation()}>
        <div className={style.divinp}>
          <input className={style.articleName}></input>
        </div>
        <div>
        <textarea className={style.articleBody}></textarea>
        </div>
      </div>
    </div>
  )
}
